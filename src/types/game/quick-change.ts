import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface QuickChange extends BaseGame<"Quick Change"> {
	readonly performers: RA2<PersonName> | RA3<PersonName>;
	readonly moderators?: RA1<PersonName>; // 35/36
	readonly scene: string;
}

// 26
interface QuickChange_1 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scene: string;
}

// 9
interface QuickChange_2 {
	readonly performers: RA3<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scene: string;
}

// 1
interface QuickChange_3 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}
