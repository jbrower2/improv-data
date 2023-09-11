import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface Opera extends BaseGame<"Opera"> {
	readonly performers?: RA<PersonName>; // 1/3
	readonly musician: PersonName;
	readonly about: string;
}

// 2
interface Opera_1 {
	readonly musician: PersonName;
	readonly about: string;
}

// 1
interface Opera_2 {
	readonly performers: RA<PersonName>;
	readonly musician: PersonName;
	readonly about: string;
}
