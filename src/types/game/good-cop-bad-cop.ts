import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface GoodCopBadCop extends BaseGame<"Good Cop Bad Cop"> {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
}
