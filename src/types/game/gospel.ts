import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Gospel extends BaseGame<"Gospel"> {
	readonly singers?: RA<PersonName>; // 1/9
	readonly musician: PersonName;
	readonly about: string;
}

// 8
interface Gospel_1 {
	readonly musician: PersonName;
	readonly about: string;
}

// 1
interface Gospel_2 {
	readonly singers: RA<PersonName>;
	readonly musician: PersonName;
	readonly about: string;
}
