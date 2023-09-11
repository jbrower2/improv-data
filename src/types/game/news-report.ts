import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface NewsReport extends BaseGame<"News Report"> {
	readonly anchormen?: RA1<PersonName> | RA2<PersonName>; // 2/16
	readonly interviewer?:
		| PersonName
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  }; // 12/16
	readonly presenter?: PersonName; // 1/16
	readonly expert?:
		| PersonName
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  }; // 15/16
	readonly reporter:
		| PersonName
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  };
	readonly inTheField?: {
		readonly name: PersonName;
		readonly alternateName: string;
	}; // 1/16
	readonly variousCharacters: PersonName;
	readonly topic: string;
}

// 8
interface NewsReport_1 {
	readonly interviewer: PersonName;
	readonly expert: PersonName;
	readonly reporter: PersonName;
	readonly variousCharacters: PersonName;
	readonly topic: string;
}

// 4
interface NewsReport_2 {
	readonly interviewer: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly expert: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly reporter: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly variousCharacters: PersonName;
	readonly topic: string;
}

// 1
interface NewsReport_3 {
	readonly anchormen: RA1<PersonName>;
	readonly expert: PersonName;
	readonly reporter: PersonName;
	readonly variousCharacters: PersonName;
	readonly topic: string;
}

// 1
interface NewsReport_4 {
	readonly reporter: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly expert: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly inTheField: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly variousCharacters: PersonName;
	readonly topic: string;
}

// 1
interface NewsReport_5 {
	readonly presenter: PersonName;
	readonly expert: PersonName;
	readonly reporter: PersonName;
	readonly variousCharacters: PersonName;
	readonly topic: string;
}

// 1
interface NewsReport_6 {
	readonly anchormen: RA2<PersonName>;
	readonly reporter: PersonName;
	readonly variousCharacters: PersonName;
	readonly topic: string;
}
