import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface BackwardsScene extends BaseGame<"Backwards Scene"> {
	readonly performers: RA2<PersonName> | RA3<PersonName>;
	readonly scene: string;
	readonly startLine?: string; // 1/6
	readonly endLine?: string; // 1/6
}

// 4
interface BackwardsScene_1 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
}

// 1
interface BackwardsScene_2 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly startLine: string;
	readonly endLine: string;
}

// 1
interface BackwardsScene_3 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}
