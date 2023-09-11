import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface ThemedRestaurant extends BaseGame<"Themed Restaurant"> {
	readonly diners: RA2<PersonName>;
	readonly waiters: RA2<PersonName> | RA3<PersonName>;
	readonly scene?: string; // 17/19
	readonly theme: string;
}

// 9
interface ThemedRestaurant_1 {
	readonly diners: RA2<PersonName>;
	readonly waiters: RA3<PersonName>;
	readonly scene: string;
	readonly theme: string;
}

// 7
interface ThemedRestaurant_2 {
	readonly diners: RA2<PersonName>;
	readonly waiters: RA2<PersonName>;
	readonly scene: string;
	readonly theme: string;
}

// 2
interface ThemedRestaurant_3 {
	readonly diners: RA2<PersonName>;
	readonly waiters: RA2<PersonName>;
	readonly theme: string;
}

// 1
interface ThemedRestaurant_4 {
	readonly waiters: RA2<PersonName>;
	readonly diners: RA2<PersonName>;
	readonly scene: string;
	readonly theme: string;
}
