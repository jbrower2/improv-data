import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface LetsMakeADate extends BaseGame<"Let's Make a Date"> {
	readonly host:
		| PersonName
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  };
	readonly guests: RA3<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 127
interface LetsMakeADate_1 {
	readonly host: PersonName;
	readonly guests: RA3<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 1
interface LetsMakeADate_2 {
	readonly host: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly guests: RA3<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}
