import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface SongTitles extends BaseGame<"Song Titles"> {
	readonly performers?: RA<PersonName>; // 6/15
	readonly scene: string;
}

// 9
interface SongTitles_1 {
	readonly scene: string;
}

// 4
interface SongTitles_2 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
}

// 2
interface SongTitles_3 {
	readonly performers: RA<PersonName>;
	readonly scene: string;
}
