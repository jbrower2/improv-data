import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface HeyYouDownThere extends BaseGame<"Hey, You Down There!"> {
	readonly narrator: PersonName;
	readonly performers: RA2<PersonName>;
	readonly topic: string;
}

// 7
interface HeyYouDownThere_1 {
	readonly narrator: PersonName;
	readonly performers: RA2<PersonName>;
	readonly topic: string;
}

// 1
interface HeyYouDownThere_2 {
	readonly performers: RA2<PersonName>;
	readonly narrator: PersonName;
	readonly topic: string;
}
