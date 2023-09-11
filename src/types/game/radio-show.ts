import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface RadioShow extends BaseGame<"Radio Show"> {
	readonly radioDjs: RA2<PersonName>;
	readonly callers: RA2<PersonName>;
	readonly specialGuests?: PersonName; // 1/3
	readonly about?: string; // 2/3
}

// 2
interface RadioShow_1 {
	readonly radioDjs: RA2<PersonName>;
	readonly callers: RA2<PersonName>;
	readonly about: string;
}

// 1
interface RadioShow_2 {
	readonly radioDjs: RA2<PersonName>;
	readonly callers: RA2<PersonName>;
	readonly specialGuests: PersonName;
}
