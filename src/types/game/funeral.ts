import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Funeral extends BaseGame<"Funeral"> {
	readonly performers: RA<PersonName>;
	readonly musicians?: RA1<PersonName> | RA2<PersonName>; // 3/4
	readonly for: string;
}

// 2
interface Funeral_1 {
	readonly performers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly for: string;
}

// 1
interface Funeral_2 {
	readonly performers: RA<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly for: string;
}

// 1
interface Funeral_3 {
	readonly performers: RA<PersonName>;
	readonly for: string;
}
