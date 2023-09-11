import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface FilmDub extends BaseGame<"Film Dub"> {
	readonly performers?: RA<PersonName>; // 92/93
	readonly scene?: string; // 88/93
	readonly film?: string; // 48/93
}

// 21
interface FilmDub_1 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}

// 17
interface FilmDub_2 {
	readonly performers: RA<PersonName>;
	readonly scene: string;
	readonly film: string;
}

// 15
interface FilmDub_3 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
}

// 15
interface FilmDub_4 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly film: string;
}

// 13
interface FilmDub_5 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly film: string;
}

// 5
interface FilmDub_6 {
	readonly performers: RA<PersonName>;
	readonly scene: string;
}

// 2
interface FilmDub_7 {
	readonly performers: RA2<PersonName>;
	readonly film: string;
}

// 2
interface FilmDub_8 {
	readonly performers: RA2<PersonName>;
}

// 1
interface FilmDub_9 {
	readonly scene: string;
}

// 1
interface FilmDub_10 {
	readonly performers: RA3<PersonName>;
	readonly film: string;
}

// 1
interface FilmDub_11 {
	readonly performers: RA1<PersonName>;
	readonly scene: string;
}
