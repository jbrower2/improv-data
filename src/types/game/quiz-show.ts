import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface QuizShow extends BaseGame<"Quiz Show"> {
	readonly host: PersonName;
	readonly contestants?: RA3<PersonName>; // 4/11
	readonly title: string;
}

// 7
interface QuizShow_1 {
	readonly host: PersonName;
	readonly title: string;
}

// 4
interface QuizShow_2 {
	readonly host: PersonName;
	readonly contestants: RA3<PersonName>;
	readonly title: string;
}
