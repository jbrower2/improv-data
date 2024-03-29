import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface CourtroomScene extends BaseGame<"Courtroom Scene"> {
	readonly judge: PersonName;
	readonly lawyer?: PersonName; // 1/3
	readonly prosecutor?: PersonName; // 2/3
	readonly witnesses: RA2<PersonName>;
	readonly crime: string;
}

// 2
interface CourtroomScene_1 {
	readonly judge: PersonName;
	readonly prosecutor: PersonName;
	readonly witnesses: RA2<PersonName>;
	readonly crime: string;
}

// 1
interface CourtroomScene_2 {
	readonly judge: PersonName;
	readonly lawyer: PersonName;
	readonly witnesses: RA2<PersonName>;
	readonly crime: string;
}
