import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface BoogieWoogieSisters extends BaseGame<"Boogie Woogie Sisters"> {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly about: string;
}
