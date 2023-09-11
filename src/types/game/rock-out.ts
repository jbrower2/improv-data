import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface RockOut extends BaseGame<"Rock Out"> {
	readonly musicians: PersonName;
	readonly about: string;
}
