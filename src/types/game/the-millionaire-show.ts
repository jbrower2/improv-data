import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface TheMillionaireShow extends BaseGame<"The Millionaire Show"> {
	readonly host:
		| PersonName
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  };
	readonly contestant: PersonName;
	readonly friendOnThePhone:
		| PersonName
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  };
	readonly audienceMember: PersonName;
	readonly theme: string;
}

// 6
interface TheMillionaireShow_1 {
	readonly host: PersonName;
	readonly contestant: PersonName;
	readonly friendOnThePhone: PersonName;
	readonly audienceMember: PersonName;
	readonly theme: string;
}

// 1
interface TheMillionaireShow_2 {
	readonly host: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly contestant: PersonName;
	readonly audienceMember: PersonName;
	readonly friendOnThePhone: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly theme: string;
}
