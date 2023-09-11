import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Secret extends BaseGame<"Secret"> {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly secret?: string; // 16/32
	readonly secretLocation?: string; // 16/32
}

// 16
interface Secret_1 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly secret: string;
}

// 16
interface Secret_2 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly secretLocation: string;
}
