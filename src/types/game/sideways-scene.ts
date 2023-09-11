import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface SidewaysScene extends BaseGame<"Sideways Scene"> {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly styles: string;
}
