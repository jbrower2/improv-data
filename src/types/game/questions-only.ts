import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface QuestionsOnly extends BaseGame<"Questions Only"> {
	readonly performers?: RA<PersonName>; // 16/57
	readonly scenes: RA<string>;
}

// 34
interface QuestionsOnly_1 {
	readonly scenes: RA1<string>;
}

// 13
interface QuestionsOnly_2 {
	readonly performers: RA<PersonName>;
	readonly scenes: RA1<string>;
}

// 6
interface QuestionsOnly_3 {
	readonly scenes: RA2<string>;
}

// 3
interface QuestionsOnly_4 {
	readonly performers: RA2<PersonName>;
	readonly scenes: RA1<string>;
}

// 1
interface QuestionsOnly_5 {
	readonly scenes: RA<string>;
}
