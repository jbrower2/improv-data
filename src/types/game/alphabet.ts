import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Alphabet extends BaseGame<"Alphabet"> {
	readonly performers: RA2<PersonName> | RA3<PersonName>;
	readonly scene: string;
	readonly startingLetter: string;
}

// 16
interface Alphabet_1 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly startingLetter: string;
}

// 11
interface Alphabet_2 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly startingLetter: string;
}
