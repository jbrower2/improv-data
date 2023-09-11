import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface QuestionsWithWigs extends BaseGame<"Questions with Wigs"> {
	readonly performers?: RA<PersonName>; // 1/39
	readonly scene?: string; // 37/39
	readonly scenes?: RA2<string>; // 2/39
}

// 36
interface QuestionsWithWigs_1 {
	readonly scene: string;
}

// 2
interface QuestionsWithWigs_2 {
	readonly scenes: RA2<string>;
}

// 1
interface QuestionsWithWigs_3 {
	readonly performers: RA<PersonName>;
	readonly scene: string;
}
