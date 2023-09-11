import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface HelpingHands extends BaseGame<"Helping Hands"> {
	readonly performers: RA2<
		| {
				readonly body: PersonName;
				readonly hands: PersonName;
		  }
		| PersonName
	>;
	readonly scene: string;
}

// 109
interface HelpingHands_1 {
	readonly performers: RA2<
		| {
				readonly body: PersonName;
				readonly hands: PersonName;
		  }
		| PersonName
	>;
	readonly scene: string;
}

// 1
interface HelpingHands_2 {
	readonly performers: RA2<{
		readonly body: PersonName;
		readonly hands: PersonName;
	}>;
	readonly scene: string;
}
