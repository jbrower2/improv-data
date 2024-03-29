import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface KickIt extends BaseGame<"Kick It"> {
	readonly performers: RA<PersonName>;
	readonly musicians?: RA2<PersonName>; // 3/6
	readonly moderators?: RA1<PersonName>; // 2/6
	readonly scene: string;
}

// 2
interface KickIt_1 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scene: string;
}

// 2
interface KickIt_2 {
	readonly performers: RA<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface KickIt_3 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface KickIt_4 {
	readonly performers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly scene: string;
}
