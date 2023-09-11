import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Newsflash extends BaseGame<"Newsflash"> {
	readonly anchormen:
		| RA2<
				| PersonName
				| {
						readonly name: PersonName;
						readonly alternateName: string;
				  }
		  >
		| RA3<
				| PersonName
				| {
						readonly name: PersonName;
						readonly alternateName: string;
				  }
		  >;
	readonly fieldReporter: PersonName;
	readonly onTheGreenScreen: string | PersonName;
}

// 64
interface Newsflash_1 {
	readonly anchormen: RA2<PersonName>;
	readonly fieldReporter: PersonName;
	readonly onTheGreenScreen: string;
}

// 11
interface Newsflash_2 {
	readonly anchormen: RA3<PersonName>;
	readonly fieldReporter: PersonName;
	readonly onTheGreenScreen: string;
}

// 1
interface Newsflash_3 {
	readonly anchormen: RA2<{
		readonly name: PersonName;
		readonly alternateName: string;
	}>;
	readonly fieldReporter: PersonName;
	readonly onTheGreenScreen: string;
}

// 1
interface Newsflash_4 {
	readonly anchormen: RA2<PersonName>;
	readonly fieldReporter: PersonName;
	readonly onTheGreenScreen: PersonName;
}
