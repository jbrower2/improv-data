import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Psychiatrist extends BaseGame<"Psychiatrist"> {
	readonly psychiatrist: PersonName;
	readonly musician?: PersonName; // 8/9
	readonly performers: RA<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 3
interface Psychiatrist_1 {
	readonly psychiatrist: PersonName;
	readonly musician: PersonName;
	readonly performers: RA2<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 3
interface Psychiatrist_2 {
	readonly psychiatrist: PersonName;
	readonly musician: PersonName;
	readonly performers: RA1<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 2
interface Psychiatrist_3 {
	readonly psychiatrist: PersonName;
	readonly musician: PersonName;
	readonly performers: RA3<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 1
interface Psychiatrist_4 {
	readonly psychiatrist: PersonName;
	readonly performers: RA3<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}
