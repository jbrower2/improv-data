import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface Wedding extends BaseGame<"Wedding"> {
	readonly audienceMember: string;
	readonly spouse: PersonName;
	readonly masterOfCeremonies: PersonName;
	readonly drunkenRelative: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly entertainer: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly musicians: RA2<PersonName>;
}
