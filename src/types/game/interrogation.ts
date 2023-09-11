import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Interrogation extends BaseGame<"Interrogation"> {
	readonly interrogators: RA2<PersonName>;
	readonly suspect: PersonName;
	readonly crime: string;
}
