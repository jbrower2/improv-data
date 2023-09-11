import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface StrangeBedfellows extends BaseGame<"Strange Bedfellows"> {
	readonly scene: string;
	readonly performers: RA3<{
		readonly name: PersonName;
		readonly character: string;
	}>;
}
