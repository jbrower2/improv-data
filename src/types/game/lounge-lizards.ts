import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface LoungeLizards extends BaseGame<"Lounge Lizards"> {
	readonly musicians: RA2<PersonName>;
	readonly about: string;
}
