import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface SurvivalShow extends BaseGame<"Survival Show"> {
	readonly host: PersonName;
	readonly contestants: RA3<PersonName>;
	readonly location: string;
}
