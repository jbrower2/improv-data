import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface QuestionThis extends BaseGame<"Question This"> {
	readonly host: PersonName;
	readonly contestants: RA<PersonName>;
	readonly answers: RA<string>;
}
