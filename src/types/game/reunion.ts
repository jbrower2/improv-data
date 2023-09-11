import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Reunion extends BaseGame<"Reunion"> {
	readonly performers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly commonBond: string;
}
