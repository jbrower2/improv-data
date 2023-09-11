import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Infomercial extends BaseGame<"Infomercial"> {
	readonly performers: RA2<
		| PersonName
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  }
	>;
	readonly product?: string; // 18/24
	readonly problem?: string; // 6/24
}

// 18
interface Infomercial_1 {
	readonly performers: RA2<PersonName>;
	readonly product: string;
}

// 5
interface Infomercial_2 {
	readonly performers: RA2<PersonName>;
	readonly problem: string;
}

// 1
interface Infomercial_3 {
	readonly performers: RA2<{
		readonly name: PersonName;
		readonly alternateName: string;
	}>;
	readonly problem: string;
}
