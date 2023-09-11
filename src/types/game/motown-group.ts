import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface MotownGroup extends BaseGame<"Motown Group"> {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA2<PersonName> | RA3<PersonName>;
	readonly song: string;
}

// 7
interface MotownGroup_1 {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly song: string;
}

// 5
interface MotownGroup_2 {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly song: string;
}
