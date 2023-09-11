import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface OneSyllableWord extends BaseGame<"One-Syllable Word"> {
	readonly scene: string;
}
