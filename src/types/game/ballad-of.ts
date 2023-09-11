import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface BalladOf extends BaseGame<"Ballad of"> {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
	readonly style: string;
}
