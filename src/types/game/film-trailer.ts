import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface FilmTrailer extends BaseGame<"Film Trailer"> {
	readonly narrator: PersonName;
	readonly performers?: RA3<PersonName>; // 1/4
	readonly title: string;
}

// 3
interface FilmTrailer_1 {
	readonly narrator: PersonName;
	readonly title: string;
}

// 1
interface FilmTrailer_2 {
	readonly narrator: PersonName;
	readonly performers: RA3<PersonName>;
	readonly title: string;
}
