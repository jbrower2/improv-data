import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Explanations extends BaseGame<"Explanations"> {
	readonly performers: RA2<
		| {
				readonly names: RA2<PersonName>;
				readonly style: string;
		  }
		| PersonName
	>;
	readonly topic: string;
	readonly style?: string; // 2/3
}

// 1
interface Explanations_1 {
	readonly topic: string;
	readonly performers: RA2<{
		readonly names: RA2<PersonName>;
		readonly style: string;
	}>;
}

// 1
interface Explanations_2 {
	readonly performers: RA2<PersonName>;
	readonly style: string;
	readonly topic: string;
}

// 1
interface Explanations_3 {
	readonly performers: RA2<PersonName>;
	readonly topic: string;
	readonly style: string;
}
