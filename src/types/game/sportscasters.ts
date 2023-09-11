import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Sportscasters extends BaseGame<"Sportscasters"> {
	readonly commentators: RA2<
		| PersonName
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  }
	>;
	readonly athletes: RA2<PersonName>;
	readonly scene: string;
}

// 13
interface Sportscasters_1 {
	readonly commentators: RA2<PersonName>;
	readonly athletes: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface Sportscasters_2 {
	readonly commentators: RA2<{
		readonly name: PersonName;
		readonly alternateName: string;
	}>;
	readonly athletes: RA2<PersonName>;
	readonly scene: string;
}
