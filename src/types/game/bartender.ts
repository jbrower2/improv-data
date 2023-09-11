import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Bartender extends BaseGame<"Bartender"> {
	readonly bartender: PersonName;
	readonly musicians: RA<PersonName>;
	readonly performers: RA<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 9
interface Bartender_1 {
	readonly bartender: PersonName;
	readonly musicians: RA1<PersonName>;
	readonly performers: RA3<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 4
interface Bartender_2 {
	readonly bartender: PersonName;
	readonly musicians: RA1<PersonName>;
	readonly performers: RA2<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 3
interface Bartender_3 {
	readonly bartender: PersonName;
	readonly musicians: RA1<PersonName>;
	readonly performers: RA1<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 3
interface Bartender_4 {
	readonly bartender: PersonName;
	readonly musicians: RA2<PersonName>;
	readonly performers: RA3<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 2
interface Bartender_5 {
	readonly bartender: PersonName;
	readonly musicians: RA2<PersonName>;
	readonly performers: RA2<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 1
interface Bartender_6 {
	readonly bartender: PersonName;
	readonly musicians: RA3<PersonName>;
	readonly performers: RA3<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}
