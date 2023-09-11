import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface AwardShow extends BaseGame<"Award Show"> {
	readonly presenters: RA2<PersonName>;
	readonly musicians?: RA2<PersonName>; // 1/8
	readonly winners: RA2<PersonName>;
	readonly for: string;
}

// 7
interface AwardShow_1 {
	readonly presenters: RA2<PersonName>;
	readonly winners: RA2<PersonName>;
	readonly for: string;
}

// 1
interface AwardShow_2 {
	readonly presenters: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly winners: RA2<PersonName>;
	readonly for: string;
}
