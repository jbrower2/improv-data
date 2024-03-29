import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface Hats extends BaseGame<"Hats"> {
	readonly performers?: RA<PersonName>; // 1/39
	readonly topic?: string; // 34/39
}

// 33
interface Hats_1 {
	readonly topic: string;
}

// 5
interface Hats_2 {}

// 1
interface Hats_3 {
	readonly performers: RA<PersonName>;
	readonly topic: string;
}
