import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface TitleSequence extends BaseGame<"Title Sequence"> {
	readonly singers: RA2<PersonName>;
	readonly actors: RA2<PersonName>;
	readonly musicians: RA2<PersonName> | RA3<PersonName>;
	readonly sitcom: string;
}

// 5
interface TitleSequence_1 {
	readonly singers: RA2<PersonName>;
	readonly actors: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly sitcom: string;
}

// 2
interface TitleSequence_2 {
	readonly actors: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly sitcom: string;
}

// 1
interface TitleSequence_3 {
	readonly singers: RA2<PersonName>;
	readonly actors: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly sitcom: string;
}

// 1
interface TitleSequence_4 {
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly actors: RA2<PersonName>;
	readonly sitcom: string;
}

// 1
interface TitleSequence_5 {
	readonly actors: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA3<PersonName>;
	readonly sitcom: string;
}
