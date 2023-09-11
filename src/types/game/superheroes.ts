import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Superheroes extends BaseGame<"Superheroes"> {
	readonly crisis: string;
	readonly performers: RA<{
		readonly name: PersonName;
		readonly superpower: string;
	}>;
}
