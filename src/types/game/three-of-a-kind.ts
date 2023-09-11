import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface ThreeOfAKind extends BaseGame<"Three of a Kind"> {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly job: string;
}

// 2
interface ThreeOfAKind_1 {
	readonly performers: RA3<PersonName>;
	readonly job: string;
	readonly scene: string;
}

// 2
interface ThreeOfAKind_2 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly job: string;
}
