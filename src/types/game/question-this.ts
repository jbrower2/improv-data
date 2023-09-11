import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface QuestionThis extends BaseGame<"Question This"> {
	readonly host: PersonName;
	readonly contestants: RA<PersonName>;
	readonly answers: RA<string>;
}
