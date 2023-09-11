import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface IrishDrinkingSong extends BaseGame<"Irish Drinking Song"> {
	readonly performers?: RA<PersonName>; // 6/36
	readonly musicians: RA1<PersonName> | RA2<PersonName>;
	readonly about: string;
}

// 29
interface IrishDrinkingSong_1 {
	readonly musicians: RA1<PersonName>;
	readonly about: string;
}

// 6
interface IrishDrinkingSong_2 {
	readonly performers: RA<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly about: string;
}

// 1
interface IrishDrinkingSong_3 {
	readonly musicians: RA2<PersonName>;
	readonly about: string;
}
