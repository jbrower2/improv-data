import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface ForeignFilmDub extends BaseGame<"Foreign Film Dub"> {
	readonly actors: RA2<PersonName>;
	readonly translators: RA2<PersonName>;
	readonly languages?: RA<string>; // 35/36
	readonly title?: string; // 11/36
	readonly film?: string; // 24/36
}

// 23
interface ForeignFilmDub_1 {
	readonly actors: RA2<PersonName>;
	readonly translators: RA2<PersonName>;
	readonly languages: RA1<string>;
	readonly film: string;
}

// 10
interface ForeignFilmDub_2 {
	readonly actors: RA2<PersonName>;
	readonly translators: RA2<PersonName>;
	readonly languages: RA1<string>;
	readonly title: string;
}

// 1
interface ForeignFilmDub_3 {
	readonly actors: RA2<PersonName>;
	readonly translators: RA2<PersonName>;
	readonly title: string;
	readonly languages: RA1<string>;
}

// 1
interface ForeignFilmDub_4 {
	readonly actors: RA2<PersonName>;
	readonly translators: RA2<PersonName>;
}

// 1
interface ForeignFilmDub_5 {
	readonly actors: RA2<PersonName>;
	readonly translators: RA2<PersonName>;
	readonly film: string;
	readonly languages: RA<string>;
}
