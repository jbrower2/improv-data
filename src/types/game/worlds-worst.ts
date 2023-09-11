import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface WorldsWorst extends BaseGame<"World's Worst"> {
	readonly performers?: RA<PersonName>; // 27/109
	readonly scenes: RA<string>;
}

// 79
interface WorldsWorst_1 {
	readonly scenes: RA1<string>;
}

// 27
interface WorldsWorst_2 {
	readonly performers: RA<PersonName>;
	readonly scenes: RA1<string>;
}

// 2
interface WorldsWorst_3 {
	readonly scenes: RA3<string>;
}

// 1
interface WorldsWorst_4 {
	readonly scenes: RA2<string>;
}
