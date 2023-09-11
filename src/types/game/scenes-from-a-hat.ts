import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface ScenesFromAHat extends BaseGame<"Scenes from a Hat"> {
	readonly performers?: RA<PersonName>; // 1/256
	readonly scenes: RA<string>;
}

// 142
interface ScenesFromAHat_1 {
	readonly scenes: RA<string>;
}

// 80
interface ScenesFromAHat_2 {
	readonly scenes: RA3<string>;
}

// 32
interface ScenesFromAHat_3 {
	readonly scenes: RA2<string>;
}

// 1
interface ScenesFromAHat_4 {
	readonly performers: RA<PersonName>;
	readonly scenes: RA<string>;
}

// 1
interface ScenesFromAHat_5 {
	readonly scenes: RA1<string>;
}
