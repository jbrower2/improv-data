import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface WhoseLine extends BaseGame<"Whose Line?"> {
	readonly performers: RA2<
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  }
		| PersonName
	>;
	readonly moderators?: RA<PersonName>; // 6/67
	readonly scenes: RA<string>;
	readonly firstLine?: string; // 1/67
	readonly lines: RA<string>;
}

// 17
interface WhoseLine_1 {
	readonly performers: RA2<PersonName>;
	readonly scenes: RA<string>;
	readonly lines: RA<string>;
}

// 14
interface WhoseLine_2 {
	readonly performers: RA2<PersonName>;
	readonly scenes: RA2<string>;
	readonly lines: RA<string>;
}

// 14
interface WhoseLine_3 {
	readonly performers: RA2<PersonName>;
	readonly scenes: RA1<string>;
	readonly lines: RA<string>;
}

// 6
interface WhoseLine_4 {
	readonly performers: RA2<PersonName>;
	readonly scenes: RA3<string>;
	readonly lines: RA<string>;
}

// 5
interface WhoseLine_5 {
	readonly performers: RA2<PersonName>;
	readonly scenes: RA1<string>;
	readonly lines: RA3<string>;
}

// 2
interface WhoseLine_6 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scenes: RA2<string>;
	readonly lines: RA<string>;
}

// 2
interface WhoseLine_7 {
	readonly performers: RA2<PersonName>;
	readonly scenes: RA<string>;
	readonly lines: RA3<string>;
}

// 1
interface WhoseLine_8 {
	readonly performers: RA2<PersonName>;
	readonly scenes: RA3<string>;
	readonly lines: RA3<string>;
}

// 1
interface WhoseLine_9 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA3<PersonName>;
	readonly scenes: RA1<string>;
	readonly lines: RA<string>;
}

// 1
interface WhoseLine_10 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scenes: RA1<string>;
	readonly firstLine: string;
	readonly lines: RA<string>;
}

// 1
interface WhoseLine_11 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scenes: RA1<string>;
	readonly lines: RA<string>;
}

// 1
interface WhoseLine_12 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA2<PersonName>;
	readonly scenes: RA1<string>;
	readonly lines: RA<string>;
}

// 1
interface WhoseLine_13 {
	readonly performers: RA2<
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  }
		| PersonName
	>;
	readonly scenes: RA<string>;
	readonly lines: RA3<string>;
}

// 1
interface WhoseLine_14 {
	readonly performers: RA2<PersonName>;
	readonly scenes: RA2<string>;
	readonly lines: RA3<string>;
}
