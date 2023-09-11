import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Picture extends BaseGame<"Picture"> {
	readonly performers?: RA<PersonName>; // 3/4
	readonly scene?: string; // 3/4
}

// 2
interface Picture_1 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface Picture_2 {
	readonly performers: RA<PersonName>;
}

// 1
interface Picture_3 {
	readonly scene: string;
}
