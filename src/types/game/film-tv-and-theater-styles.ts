import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface FilmTvAndTheaterStyles
	extends BaseGame<"Film TV and Theater Styles"> {
	readonly performers?:
		| RA2<
				| {
						readonly name: PersonName;
						readonly alternateName: string;
				  }
				| PersonName
		  >
		| RA3<
				| {
						readonly name: PersonName;
						readonly alternateName: string;
				  }
				| PersonName
		  >; // 96/141
	readonly moderators?: RA1<PersonName>; // 11/141
	readonly scene?: string; // 95/141
	readonly styles?: RA<string>; // 96/141
	readonly groups?:
		| RA1<{
				readonly performers: RA2<PersonName>;
				readonly scene: string;
				readonly styles: RA<string>;
		  }>
		| RA2<{
				readonly performers: RA2<PersonName>;
				readonly scene: string;
				readonly styles: RA<string>;
		  }>; // 45/141
}

// 47
interface FilmTvAndTheaterStyles_1 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly styles: RA<string>;
}

// 38
interface FilmTvAndTheaterStyles_2 {
	readonly groups: RA2<{
		readonly performers: RA2<PersonName>;
		readonly scene: string;
		readonly styles: RA<string>;
	}>;
}

// 19
interface FilmTvAndTheaterStyles_3 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly styles: RA<string>;
}

// 18
interface FilmTvAndTheaterStyles_4 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly styles: RA3<string>;
}

// 10
interface FilmTvAndTheaterStyles_5 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scene: string;
	readonly styles: RA<string>;
}

// 4
interface FilmTvAndTheaterStyles_6 {
	readonly groups: RA2<{
		readonly performers: RA2<PersonName>;
		readonly scene: string;
		readonly styles: RA3<string>;
	}>;
}

// 1
interface FilmTvAndTheaterStyles_7 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly styles: RA<string>;
}

// 1
interface FilmTvAndTheaterStyles_8 {
	readonly groups: RA2<{
		readonly performers: RA2<PersonName>;
		readonly scene: string;
		readonly styles: RA2<string> | RA3<string>;
	}>;
}

// 1
interface FilmTvAndTheaterStyles_9 {
	readonly groups: RA1<{
		readonly performers: RA2<PersonName>;
		readonly scene: string;
		readonly styles: RA<string>;
	}>;
}

// 1
interface FilmTvAndTheaterStyles_10 {
	readonly groups: RA1<{
		readonly performers: RA2<PersonName>;
		readonly scene: string;
		readonly styles: RA3<string>;
	}>;
}

// 1
interface FilmTvAndTheaterStyles_11 {
	readonly performers: RA3<
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  }
		| PersonName
	>;
	readonly scene: string;
	readonly styles: RA<string>;
}
