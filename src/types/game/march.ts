import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface March extends BaseGame<"March"> {
	readonly performers?: RA<PersonName>; // 1/10
	readonly musician: PersonName;
	readonly about: string;
}

// 8
interface March_1 {
	readonly musician: PersonName;
	readonly about: string;
}

// 1
interface March_2 {
	readonly performers: RA<PersonName>;
	readonly musician: PersonName;
	readonly about: string;
}

// 1
interface March_3 {
	readonly about: string;
	readonly musician: PersonName;
}
