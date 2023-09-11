import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Reunion extends BaseGame<"Reunion"> {
	readonly performers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly commonBond: string;
}
