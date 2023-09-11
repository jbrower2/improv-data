import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface NumberOfWords extends BaseGame<"Number of Words"> {
	readonly scene?: string; // 17/18
	readonly performers: RA<{
		readonly name: PersonName;
		readonly quirk?: string;
		readonly words: number;
	}>;
}

// 11
interface NumberOfWords_1 {
	readonly scene: string;
	readonly performers: RA<{
		readonly name: PersonName;
		readonly words: number;
	}>;
}

// 6
interface NumberOfWords_2 {
	readonly scene: string;
	readonly performers: RA<{
		readonly name: PersonName;
		readonly quirk: string;
		readonly words: number;
	}>;
}

// 1
interface NumberOfWords_3 {
	readonly performers: RA<{
		readonly name: PersonName;
		readonly quirk: string;
		readonly words: number;
	}>;
}
