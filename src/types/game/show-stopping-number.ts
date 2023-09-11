import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface ShowStoppingNumber extends BaseGame<"Show-Stopping Number"> {
	readonly performers: RA2<PersonName> | RA3<PersonName>;
	readonly musicians?: RA2<PersonName>; // 9/15
	readonly scene: string;
	readonly songs?: RA3<
		| string
		| {
				readonly name: PersonName;
				readonly song: string;
		  }
	>; // 3/15
}

// 6
interface ShowStoppingNumber_1 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}

// 6
interface ShowStoppingNumber_2 {
	readonly performers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface ShowStoppingNumber_3 {
	readonly performers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly scene: string;
	readonly songs: RA3<string>;
}

// 1
interface ShowStoppingNumber_4 {
	readonly performers: RA3<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly scene: string;
	readonly songs: RA3<{
		readonly name: PersonName;
		readonly song: string;
	}>;
}

// 1
interface ShowStoppingNumber_5 {
	readonly performers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly scene: string;
	readonly songs: RA3<string>;
}
