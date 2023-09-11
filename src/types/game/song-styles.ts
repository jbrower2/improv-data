import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface SongStyles extends BaseGame<"Song Styles"> {
	readonly singers: RA<
		| PersonName
		| {
				readonly name: RA1<PersonName>;
				readonly about: string;
				readonly style: string;
		  }
	>;
	readonly musicians?: RA<PersonName>; // 130/135
	readonly about?: string | PersonName; // 132/135
	readonly song?: string; // 1/135
	readonly startingLine?: string; // 1/135
	readonly endingLine?: string; // 1/135
	readonly styles?: RA<string>; // 134/135
}

// 49
interface SongStyles_1 {
	readonly singers: RA1<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 35
interface SongStyles_2 {
	readonly singers: RA1<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 13
interface SongStyles_3 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly about: string;
	readonly styles: RA2<string>;
}

// 13
interface SongStyles_4 {
	readonly singers: RA1<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 6
interface SongStyles_5 {
	readonly singers: RA1<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly about: PersonName;
	readonly styles: RA1<string>;
}

// 3
interface SongStyles_6 {
	readonly singers: RA3<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 3
interface SongStyles_7 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 2
interface SongStyles_8 {
	readonly singers: RA1<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
	readonly styles: RA2<string>;
}

// 2
interface SongStyles_9 {
	readonly singers: RA1<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 1
interface SongStyles_10 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly about: string;
	readonly styles: RA3<string>;
}

// 1
interface SongStyles_11 {
	readonly musicians: RA1<PersonName>;
	readonly singers: RA2<{
		readonly name: RA1<PersonName>;
		readonly about: string;
		readonly style: string;
	}>;
}

// 1
interface SongStyles_12 {
	readonly singers: RA1<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly startingLine: string;
	readonly endingLine: string;
	readonly styles: RA1<string>;
}

// 1
interface SongStyles_13 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 1
interface SongStyles_14 {
	readonly singers: RA1<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly song: string;
	readonly styles: RA1<string>;
}

// 1
interface SongStyles_15 {
	readonly singers: RA1<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: PersonName;
	readonly styles: RA1<string>;
}

// 1
interface SongStyles_16 {
	readonly singers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly about: string;
	readonly styles: RA1<string>;
}

// 1
interface SongStyles_17 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly styles: RA1<string>;
	readonly about: string;
}

// 1
interface SongStyles_18 {
	readonly singers: RA1<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly styles: RA1<string>;
	readonly about: string;
}
