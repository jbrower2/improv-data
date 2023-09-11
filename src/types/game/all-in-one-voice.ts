import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface AllInOneVoice extends BaseGame<"All in One Voice"> {
	readonly performers: RA2<{
		readonly names: RA2<PersonName>;
		readonly character: string;
	}>;
	readonly musicians: RA2<PersonName> | RA3<PersonName>;
	readonly song: string;
}

// 1
interface AllInOneVoice_1 {
	readonly performers: RA2<{
		readonly names: RA2<PersonName>;
		readonly character: string;
	}>;
	readonly musicians: RA2<PersonName>;
	readonly song: string;
}

// 1
interface AllInOneVoice_2 {
	readonly performers: RA2<{
		readonly names: RA2<PersonName>;
		readonly character: string;
	}>;
	readonly musicians: RA3<PersonName>;
	readonly song: string;
}
