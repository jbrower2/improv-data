import fs from "fs";

const DEBUG = false;
const INDENT = "\t";

abstract class BaseType {
	or(that: BaseType, recursive = false): BaseType {
		return this === that
			? this
			: recursive
			? new OrType([this, that])
			: that.or(this, true);
	}

	abstract str(addCount?: boolean): string;
}

class OrType extends BaseType {
	readonly types: readonly BaseType[];

	constructor(types: readonly BaseType[]) {
		super();

		const tempTypes = Array<BaseType>();
		this.types = tempTypes;

		for (const type of types) {
			if (type instanceof OrType) {
				throw new Error("Recursive OrType");
			}

			if (type instanceof ObjectType) {
				const i = tempTypes.findIndex((t) => t instanceof ObjectType);
				if (i === -1) {
					tempTypes.push(type);
				} else {
					tempTypes[i] = tempTypes[i].or(type);
				}
				continue;
			}

			if (type instanceof ArrayType) {
				const i = tempTypes.findIndex((t) => t instanceof ArrayType);
				if (i === -1) {
					tempTypes.push(type);
				} else {
					tempTypes[i] = tempTypes[i].or(type);
				}
				continue;
			}

			if (!tempTypes.includes(type)) {
				tempTypes.push(type);
				continue;
			}

			if (DEBUG) {
				console.log("Skipping:", type, "-", this.types);
			}
		}
	}

	or(that: BaseType): BaseType {
		if (that instanceof OrType) {
			return new OrType([...this.types, ...that.types]);
		}

		return new OrType([...this.types, that]);
	}

	str(): string {
		return `(${this.types.map((t) => t.str()).join(" | ")})`;
	}
}

class ObjectType extends BaseType {
	readonly properties: ReadonlyMap<string, BaseType>;
	readonly required: ReadonlySet<string>;
	readonly counts: ReadonlyMap<string, number>;
	readonly totalCount: number;
	readonly keySets: readonly (readonly string[])[];

	constructor(
		properties: ReadonlyMap<string, BaseType>,
		required: ReadonlySet<string> = new Set(properties.keys()),
		counts: ReadonlyMap<string, number> = new Map(
			Array.from(properties.keys()).map((k) => [k, 1]),
		),
		totalCount: number = 1,
		keySets: readonly (readonly string[])[] = [Array.from(properties.keys())],
	) {
		super();

		this.properties = properties;
		this.required = required;
		this.counts = counts;
		this.totalCount = totalCount;
		this.keySets = keySets;
	}

	or(that: BaseType, recursive = false): BaseType {
		if (!(that instanceof ObjectType)) {
			return recursive ? new OrType([this, that]) : that.or(this, true);
		}

		const newProperties = new Map<string, BaseType>();
		const newRequired = new Set<string>();
		const newCounts = new Map<string, number>();
		const newTotalCount = this.totalCount + that.totalCount;
		const newKeySets = [...this.keySets, ...that.keySets];

		for (const k of new Set([
			...this.properties.keys(),
			...that.properties.keys(),
		])) {
			const typeA = this.properties.get(k);
			const typeB = that.properties.get(k);

			newProperties.set(k, !typeA ? typeB! : !typeB ? typeA : typeA.or(typeB));

			if (this.required.has(k) && that.required.has(k)) {
				newRequired.add(k);
			}

			const countA = this.counts.get(k) || 0;
			const countB = that.counts.get(k) || 0;

			newCounts.set(k, countA + countB);
		}

		return new ObjectType(
			newProperties,
			newRequired,
			newCounts,
			newTotalCount,
			newKeySets,
		);
	}

	keys(): readonly string[] {
		function getKeyOrder(
			a: string,
			b: string,
			keys: readonly string[],
		): -1 | 0 | 1 {
			const i = keys.indexOf(a);
			const j = keys.indexOf(b);
			return i === -1 || j === -1 ? 0 : i < j ? -1 : i > j ? 1 : 0;
		}

		const sortKeys = (a: string, b: string): number => {
			let total = 0;
			for (const keys of this.keySets) {
				total += getKeyOrder(a, b, keys);
			}
			return total;
		};

		return Array.from(this.properties.keys()).sort(sortKeys);
	}

	str(addCount = false): string {
		let s = "{\n";
		for (const k of this.keys()) {
			const required = this.required.has(k);
			const v = this.properties.get(k)!;
			const count = this.counts.get(k) || 0;
			s += `${INDENT}readonly ${k}${required ? "" : "?"}: ${v
				.str()
				.replaceAll("\n", `\n${INDENT}`)};${
				addCount && !required ? ` // ${count}/${this.totalCount}` : ""
			}\n`;
		}
		s += "}";
		return s;
	}
}

class ArrayType extends BaseType {
	readonly items: BaseType;
	readonly lengths: ReadonlySet<number>;

	constructor(items: BaseType, lengths: Set<number>) {
		super();

		this.items = items;
		this.lengths = lengths;
	}

	or(that: BaseType, recursive = false): BaseType {
		if (!(that instanceof ArrayType)) {
			return recursive ? new OrType([this, that]) : that.or(this, true);
		}

		const newItems = this.items.or(that.items);
		const newLengths = new Set(
			[...this.lengths, ...that.lengths].sort((a, b) => a - b),
		);

		return new ArrayType(newItems, newLengths);
	}

	str(): string {
		const itemsStr = this.items.str();

		if (this.lengths.size === 1) {
			const [length] = this.lengths;
			if (length <= 3) {
				return `RA${length}<${itemsStr}>`;
			}
		}

		if (this.lengths.size === 2) {
			let [length1, length2] = this.lengths;
			if (length1 > length2) {
				const temp = length1;
				length1 = length2;
				length2 = temp;
			}

			if (length2 <= 3) {
				return `(${[length1, length2]
					.map((length) => `RA${length}<${itemsStr}>`)
					.join(" | ")})`;
			}
		}

		return `RA<${itemsStr}>`;
	}
}

class BooleanType extends BaseType {
	str(): string {
		return "boolean";
	}
}
const BOOLEAN = new BooleanType();

class NumberType extends BaseType {
	str(): string {
		return "number";
	}
}
const NUMBER = new NumberType();

class StringType extends BaseType {
	str(): string {
		return "string";
	}
}
const STRING = new StringType();

class PersonType extends BaseType {
	str(): string {
		return "PersonName";
	}
}
const PERSON = new PersonType();

const shows = JSON.parse(await fs.promises.readFile("main.json", "utf8"));

await createEmptyDir("output");

const allPeople = new Set<string>();
const combinedTypes = new Map<string, BaseType>();
const allTypes = new Map<string, Map<string, number>>();
for (const [showId, show] of Object.entries<any>(shows)) {
	await createEmptyDir(`output/${showId}`);

	for (const [seasonKey, season] of Object.entries<any>(show.seasons)) {
		await createEmptyDir(`output/${showId}/${seasonKey}`);

		for (const [episodeKey, episode] of Object.entries<any>(season)) {
			const basePeople = new Set<string>();
			const people = new Set(
				[
					episode.host,
					...(episode.performers || []),
					...(episode.guests || []),
					...(episode.musicians || []),
				].flatMap((n) => {
					if (typeof n === "string") {
						basePeople.add(n);
						return [n];
					}

					const { name, alternateName } = n;
					basePeople.add(name);
					return [name, alternateName];
				}),
			);

			for (const name of basePeople) {
				allPeople.add(name);
			}

			let episodeString = "";
			episodeString += 'import { type Episode } from "../../types/episode";\n';
			episodeString += "\n";
			episodeString += "export const ";
			episodeString += episodeKey;
			episodeString += ": Episode<";
			episodeString += Array.from(basePeople)
				.map((name) => JSON.stringify(name))
				.join(" | ");
			episodeString += "> = ";
			episodeString += JSON.stringify(
				{
					number: Number(/^e0*(\d+)$/.exec(episodeKey)![1]),
					...episode,
				},
				null,
				INDENT,
			);
			episodeString += ";\n";

			await fs.promises.writeFile(
				`output/${showId}/${seasonKey}/${episodeKey}.ts`,
				episodeString,
			);

			function getType(o: any): BaseType {
				if (Array.isArray(o)) {
					let items = getType(o[0]);
					for (let i = 1; i < o.length; i++) {
						items = items.or(getType(o[i]));
					}
					return new ArrayType(items, new Set([o.length]));
				}

				switch (typeof o) {
					case "object": {
						const properties = new Map();
						for (const [k, v] of Object.entries<any>(o)) {
							properties.set(k, getType(v));
						}
						return new ObjectType(properties);
					}

					case "boolean":
						return BOOLEAN;

					case "number":
						return NUMBER;

					case "string":
						return people.has(o) ? PERSON : STRING;

					default:
						throw new Error(`Unexpected type: ${JSON.stringify(o)}`);
				}
			}

			for (const { name, alternateName, ...game } of episode.games) {
				const type = getType(game);

				const combinedType = combinedTypes.has(name)
					? type.or(combinedTypes.get(name)!)
					: type;
				combinedTypes.set(name, combinedType);

				let map = allTypes.get(name);
				if (!map) {
					allTypes.set(name, (map = new Map()));
				}
				const typeStr = type.str();
				map.set(typeStr, (map.get(typeStr) || 0) + 1);
			}
		}

		let seasonString = "";
		for (const episodeKey of Object.keys(season).sort()) {
			seasonString += "import { ";
			seasonString += episodeKey;
			seasonString += ' } from "./';
			seasonString += episodeKey;
			seasonString += '";\n';
		}
		seasonString += 'import { type Season } from "../../types/season";\n';
		seasonString += "\n";
		seasonString += "export const ";
		seasonString += seasonKey;
		seasonString += ": Season = {\n";
		seasonString += INDENT;
		seasonString += "number: ";
		seasonString += /^s0*(\d+)$/.exec(seasonKey)![1];
		seasonString += ",\n";
		seasonString += INDENT;
		seasonString += "episodes: [\n";
		for (const episodeKey of Object.keys(season).sort()) {
			seasonString += INDENT;
			seasonString += INDENT;
			seasonString += episodeKey;
			seasonString += ",\n";
		}
		seasonString += INDENT;
		seasonString += "],\n";
		seasonString += "};\n";

		await fs.promises.writeFile(
			`output/${showId}/${seasonKey}/index.ts`,
			seasonString,
		);
	}

	let showString = "";
	for (const seasonKey of Object.keys(show.seasons).sort()) {
		showString += "import { ";
		showString += seasonKey;
		showString += ' } from "./';
		showString += seasonKey;
		showString += '";\n';
	}
	showString += 'import { type Show } from "../types/show";\n';
	showString += "\n";
	showString += "export const ";
	showString += showId.replace(/-(\w)/g, (s) => s[1].toUpperCase());
	showString += ": Show = {\n";
	showString += INDENT;
	showString += "name: ";
	showString += JSON.stringify(show.name);
	showString += ",\n";
	showString += INDENT;
	showString += "seasons: [\n";
	for (const seasonKey of Object.keys(show.seasons).sort()) {
		showString += INDENT;
		showString += INDENT;
		showString += seasonKey;
		showString += ",\n";
	}
	showString += INDENT;
	showString += "],\n";
	showString += "};\n";

	await fs.promises.writeFile(`output/${showId}/index.ts`, showString);
}

let indexString = "";
let addedShowImport = false;
for (const showId of Object.keys(shows).sort()) {
	if (showId > "show" && !addedShowImport) {
		addedShowImport = true;
		indexString += 'import { type Show } from "./types/show";\n';
	}
	indexString += "import { ";
	indexString += showId.replace(/-(\w)/g, (s) => s[1].toUpperCase());
	indexString += ' } from "./';
	indexString += showId;
	indexString += '";\n';
}
indexString += "\n";
indexString += "export const shows: readonly Show[] = [\n";
for (const showId of Object.keys(shows).sort()) {
	indexString += INDENT;
	indexString += showId.replace(/-(\w)/g, (s) => s[1].toUpperCase());
	indexString += ",\n";
}
indexString += "];\n";

await fs.promises.writeFile(`output/index.ts`, indexString);

async function rimraf(dir: string): Promise<void> {
	if (!fs.existsSync(dir)) return;

	for (const f of await fs.promises.readdir(dir, { withFileTypes: true })) {
		const name = `${dir}/${f.name}`;
		if (f.isDirectory()) {
			await rimraf(name);
		} else {
			await fs.promises.rm(name);
		}
	}

	await fs.promises.rm(dir, { recursive: true });

	while (fs.existsSync(dir)) {
		console.log("Waiting for", dir, "to disappear");
		await new Promise<void>((resolve) => setTimeout(resolve, 100));
	}
}

async function createEmptyDir(dir: string): Promise<void> {
	await rimraf(dir);
	await fs.promises.mkdir(dir);
}

await createEmptyDir("output/types");
await createEmptyDir("output/types/game");

await fs.promises.writeFile(
	"output/types/base-game.ts",
	`export interface BaseGame<Name extends string> {
${INDENT}readonly name: Name;
${INDENT}readonly alternateName?: string;
}
`,
);

await fs.promises.writeFile(
	"output/types/episode.ts",
	`import { type Game } from "./game";
import { type PersonName } from "./person.js";
import { type RA } from "./readonly-array.js";

export interface Episode<P extends PersonName> {
${INDENT}readonly number: number;
${INDENT}readonly wikiUrl: string;
${INDENT}readonly airdate: string;
${INDENT}readonly host: P;
${INDENT}readonly performers: RA<P>;
${INDENT}readonly guests?: RA<P>;
${INDENT}readonly musicians?: RA<P>;
${INDENT}readonly games: RA<Game>;
}
`,
);

await fs.promises.writeFile(
	"output/types/season.ts",
	`import { Episode } from "./episode";
import { PersonName } from "./person.js";

export interface Season {
${INDENT}readonly number: number;
${INDENT}readonly episodes: readonly Episode[];
}
`,
);

await fs.promises.writeFile(
	"output/types/show.ts",
	`import { Season } from "./season";

export interface Show {
${INDENT}readonly name: string;
${INDENT}readonly seasons: readonly Season[];
}
`,
);

await fs.promises.writeFile(
	"output/types/person.ts",
	`export type PersonName =\n${Array.from(allPeople)
		.sort()
		.map((p) => `${INDENT}| ${JSON.stringify(p)}`)
		.join("\n")};\n`,
);

await fs.promises.writeFile(
	"output/types/readonly-array.ts",
	`export type RA<T> = readonly T[];\n${Array(3)
		.fill(null)
		.map(
			(_, n) =>
				`export type RA${++n}<T> = readonly [${Array(n)
					.fill("T")
					.join(", ")}];`,
		)
		.join("\n")}\n`,
);

let indexImports = "";
let indexType = "export type Game =";

for (const name of Array.from(combinedTypes.keys()).sort()) {
	const type = combinedTypes.get(name)!;

	let s = "";

	s += 'import { type BaseGame } from "../base-game";\n';
	s += 'import { type PersonName } from "../person";\n';
	s +=
		'import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";\n';
	s += "\n";

	const lowerWords = name
		.split(/[-\s]+/)
		.map((word: string) => word.toLowerCase().replace(/\W+/, ""));

	const camelName = lowerWords
		.map((word: string) => `${word[0].toUpperCase()}${word.substring(1)}`)
		.join("");

	const kebabName = lowerWords.join("-");

	indexImports += `import { ${camelName} } from "./${kebabName}";\n`;
	indexType += `\n${INDENT}| ${camelName}`;

	s += `export interface ${camelName} extends BaseGame<${JSON.stringify(
		name,
	)}> ${type.str(true)}\n`;

	const map = allTypes.get(name)!;
	if (map.size > 1) {
		let i = 1;
		for (const [typeStr, count] of Array.from(map).sort(
			([, a], [, b]) => b - a,
		)) {
			s += "\n";
			s += `// ${count}\n`;
			s += `interface ${camelName}_${i++} ${typeStr}\n`;
		}
	}

	await fs.promises.writeFile(`output/types/game/${kebabName}.ts`, s);
}

await fs.promises.writeFile(
	"output/types/game/index.ts",
	`${indexImports}\n${indexType};\n`,
);
