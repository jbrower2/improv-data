import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface EveryOtherLine extends BaseGame<"Every Other Line"> {
	readonly performers: RA<PersonName>;
	readonly phoneReaders?: RA2<PersonName>; // 1/17
	readonly phoneDonors?: RA2<string>; // 10/17
	readonly play?: string; // 7/17
	readonly scene: string;
	readonly endLine?: string; // 4/17
}

// 9
interface EveryOtherLine_1 {
	readonly performers: RA3<PersonName>;
	readonly phoneDonors: RA2<string>;
	readonly scene: string;
}

// 4
interface EveryOtherLine_2 {
	readonly performers: RA2<PersonName>;
	readonly play: string;
	readonly scene: string;
	readonly endLine: string;
}

// 2
interface EveryOtherLine_3 {
	readonly performers: RA2<PersonName>;
	readonly play: string;
	readonly scene: string;
}

// 1
interface EveryOtherLine_4 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly play: string;
}

// 1
interface EveryOtherLine_5 {
	readonly performers: RA1<PersonName>;
	readonly phoneReaders: RA2<PersonName>;
	readonly phoneDonors: RA2<string>;
	readonly scene: string;
}
