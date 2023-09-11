import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface AfricanChant extends BaseGame<"African Chant"> {
	readonly singer?: PersonName; // 4/5
	readonly musicians: RA2<PersonName> | RA3<PersonName>;
	readonly about: string;
}

// 2
interface AfricanChant_1 {
	readonly singer: PersonName;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
}

// 2
interface AfricanChant_2 {
	readonly singer: PersonName;
	readonly musicians: RA3<PersonName>;
	readonly about: string;
}

// 1
interface AfricanChant_3 {
	readonly musicians: RA2<PersonName>;
	readonly about: string;
}
