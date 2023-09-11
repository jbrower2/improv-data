import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface FillerClip extends BaseGame<"Filler Clip"> {
	readonly notes?: string; // 1/6
	readonly performers?: RA2<PersonName> | RA3<PersonName>; // 5/6
	readonly scene?: string; // 5/6
}

// 3
interface FillerClip_1 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
}

// 2
interface FillerClip_2 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface FillerClip_3 {
	readonly notes: string;
}
