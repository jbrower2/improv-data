import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface DooWop extends BaseGame<"Doo-wop"> {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA2<PersonName> | RA3<PersonName>;
	readonly about?: string; // 35/36
	readonly song?: string; // 1/36
}

// 30
interface DooWop_1 {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
}

// 5
interface DooWop_2 {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly about: string;
}

// 1
interface DooWop_3 {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly song: string;
}
