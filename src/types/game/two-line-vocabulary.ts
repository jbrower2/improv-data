import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface TwoLineVocabulary extends BaseGame<"Two-Line Vocabulary"> {
	readonly performers?: RA3<PersonName>; // 9/17
	readonly scene: string;
	readonly lines: RA2<{
		readonly name: PersonName;
		readonly lines: RA2<string>;
	}>;
}

// 8
interface TwoLineVocabulary_1 {
	readonly scene: string;
	readonly lines: RA2<{
		readonly name: PersonName;
		readonly lines: RA2<string>;
	}>;
}

// 7
interface TwoLineVocabulary_2 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly lines: RA2<{
		readonly name: PersonName;
		readonly lines: RA2<string>;
	}>;
}

// 2
interface TwoLineVocabulary_3 {
	readonly performers: RA3<PersonName>;
	readonly lines: RA2<{
		readonly name: PersonName;
		readonly lines: RA2<string>;
	}>;
	readonly scene: string;
}
