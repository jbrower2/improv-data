import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
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
