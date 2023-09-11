import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Rap extends BaseGame<"Rap"> {
	readonly performers?: RA<PersonName>; // 5/10
	readonly musician?: PersonName; // 2/10
	readonly about: string;
}

// 5
interface Rap_1 {
	readonly about: string;
}

// 3
interface Rap_2 {
	readonly performers: RA<PersonName>;
	readonly about: string;
}

// 2
interface Rap_3 {
	readonly performers: RA<PersonName>;
	readonly musician: PersonName;
	readonly about: string;
}
