import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface AmericanMusical extends BaseGame<"American Musical"> {
	readonly performers?: RA<PersonName>; // 4/15
	readonly musician: PersonName;
	readonly about: string;
}

// 11
interface AmericanMusical_1 {
	readonly musician: PersonName;
	readonly about: string;
}

// 3
interface AmericanMusical_2 {
	readonly performers: RA<PersonName>;
	readonly musician: PersonName;
	readonly about: string;
}

// 1
interface AmericanMusical_3 {
	readonly performers: RA3<PersonName>;
	readonly musician: PersonName;
	readonly about: string;
}
