import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface RockOut extends BaseGame<"Rock Out"> {
	readonly musicians: PersonName;
	readonly about: string;
}
