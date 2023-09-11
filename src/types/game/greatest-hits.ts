import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface GreatestHits extends BaseGame<"Greatest Hits"> {
	readonly salesmen: RA2<PersonName> | RA3<PersonName>;
	readonly singers?: RA<PersonName>; // 194/195
	readonly musicians?: RA<PersonName>; // 194/195
	readonly album: string;
	readonly songs?: RA<{
		readonly style: string;
		readonly title: string;
	}>; // 194/195
}

// 43
interface GreatestHits_1 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 21
interface GreatestHits_2 {
	readonly singers: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 15
interface GreatestHits_3 {
	readonly singers: RA1<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 15
interface GreatestHits_4 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA1<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 11
interface GreatestHits_5 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 9
interface GreatestHits_6 {
	readonly singers: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly album: string;
	readonly songs: RA1<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 9
interface GreatestHits_7 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 7
interface GreatestHits_8 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA1<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 6
interface GreatestHits_9 {
	readonly singers: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 6
interface GreatestHits_10 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA1<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 6
interface GreatestHits_11 {
	readonly singers: RA1<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 5
interface GreatestHits_12 {
	readonly singers: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 5
interface GreatestHits_13 {
	readonly singers: RA1<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 5
interface GreatestHits_14 {
	readonly singers: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 4
interface GreatestHits_15 {
	readonly singers: RA1<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 4
interface GreatestHits_16 {
	readonly singers: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 3
interface GreatestHits_17 {
	readonly singers: RA3<PersonName>;
	readonly salesmen: RA3<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly album: string;
	readonly songs: RA1<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 2
interface GreatestHits_18 {
	readonly singers: RA3<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly album: string;
	readonly songs: RA1<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 2
interface GreatestHits_19 {
	readonly singers: RA3<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 2
interface GreatestHits_20 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA1<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 2
interface GreatestHits_21 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_22 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA1<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_23 {
	readonly singers: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_24 {
	readonly singers: RA1<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly album: string;
	readonly songs: RA<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_25 {
	readonly singers: RA1<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly album: string;
	readonly songs: RA3<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_26 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA1<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_27 {
	readonly singers: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly album: string;
	readonly songs: RA<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_28 {
	readonly singers: RA1<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_29 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_30 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA2<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_31 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA1<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_32 {
	readonly singers: RA2<PersonName>;
	readonly salesmen: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA1<{
		readonly style: string;
		readonly title: string;
	}>;
}

// 1
interface GreatestHits_33 {
	readonly salesmen: RA2<PersonName>;
	readonly album: string;
}

// 1
interface GreatestHits_34 {
	readonly salesmen: RA2<PersonName>;
	readonly singers: RA1<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly album: string;
	readonly songs: RA1<{
		readonly style: string;
		readonly title: string;
	}>;
}
