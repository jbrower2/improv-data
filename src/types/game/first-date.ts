import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface FirstDate extends BaseGame<"First Date"> {
	readonly mainCouple: RA2<PersonName>;
	readonly extraPerformers: RA<PersonName>;
	readonly coupleFromTheAudience: RA2<string>;
}

// 2
interface FirstDate_1 {
	readonly mainCouple: RA2<PersonName>;
	readonly extraPerformers: RA3<PersonName>;
	readonly coupleFromTheAudience: RA2<string>;
}

// 2
interface FirstDate_2 {
	readonly mainCouple: RA2<PersonName>;
	readonly extraPerformers: RA<PersonName>;
	readonly coupleFromTheAudience: RA2<string>;
}

// 1
interface FirstDate_3 {
	readonly mainCouple: RA2<PersonName>;
	readonly extraPerformers: RA1<PersonName>;
	readonly coupleFromTheAudience: RA2<string>;
}
