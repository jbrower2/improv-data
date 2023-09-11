import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface StandSitLie extends BaseGame<"Stand Sit Lie"> {
	readonly performers: RA3<PersonName>;
	readonly misspokenScene?: string; // 1/25
	readonly scene: string;
}

// 24
interface StandSitLie_1 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
}

// 1
interface StandSitLie_2 {
	readonly performers: RA3<PersonName>;
	readonly misspokenScene: string;
	readonly scene: string;
}
