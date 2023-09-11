import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface BalladOf extends BaseGame<"Ballad of"> {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
	readonly style: string;
}
