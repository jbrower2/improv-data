import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Hoedown extends BaseGame<"Hoedown"> {
	readonly performers?: RA<PersonName>; // 66/145
	readonly musicians: RA1<PersonName> | RA2<PersonName>;
	readonly about: string;
}

// 62
interface Hoedown_1 {
	readonly performers: RA<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly about: string;
}

// 60
interface Hoedown_2 {
	readonly musicians: RA1<PersonName>;
	readonly about: string;
}

// 18
interface Hoedown_3 {
	readonly about: string;
	readonly musicians: RA1<PersonName>;
}

// 1
interface Hoedown_4 {
	readonly about: string;
	readonly musicians: RA1<PersonName>;
	readonly performers: RA<PersonName>;
}

// 1
interface Hoedown_5 {
	readonly about: string;
	readonly performers: RA<PersonName>;
	readonly musicians: RA1<PersonName>;
}

// 1
interface Hoedown_6 {
	readonly performers: RA<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
}

// 1
interface Hoedown_7 {
	readonly musicians: RA1<PersonName>;
	readonly performers: RA<PersonName>;
	readonly about: string;
}

// 1
interface Hoedown_8 {
	readonly musicians: RA2<PersonName>;
	readonly about: string;
}
