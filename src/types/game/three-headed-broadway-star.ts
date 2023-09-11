import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface ThreeHeadedBroadwayStar
	extends BaseGame<"Three-Headed Broadway Star"> {
	readonly singers: RA3<PersonName>;
	readonly musicians: string;
	readonly to?: string; // 15/31
	readonly musical?: string; // 14/31
	readonly song: string;
}

// 14
interface ThreeHeadedBroadwayStar_1 {
	readonly singers: RA3<PersonName>;
	readonly musicians: string;
	readonly to: string;
	readonly song: string;
}

// 13
interface ThreeHeadedBroadwayStar_2 {
	readonly singers: RA3<PersonName>;
	readonly musicians: string;
	readonly musical: string;
	readonly song: string;
}

// 3
interface ThreeHeadedBroadwayStar_3 {
	readonly singers: RA3<PersonName>;
	readonly musicians: string;
	readonly song: string;
}

// 1
interface ThreeHeadedBroadwayStar_4 {
	readonly singers: RA3<PersonName>;
	readonly musicians: string;
	readonly to: string;
	readonly musical: string;
	readonly song: string;
}
