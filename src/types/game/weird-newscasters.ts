import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface WeirdNewscasters extends BaseGame<"Weird Newscasters"> {
	readonly anchor:
		| {
				readonly name: PersonName;
				readonly alternateName: string;
		  }
		| PersonName;
	readonly coAnchor: {
		readonly name: PersonName;
		readonly alternateName?: string;
		readonly quirk: string;
	};
	readonly sports?: {
		readonly name: PersonName;
		readonly alternateName?: string;
		readonly quirk: string;
	}; // 117/118
	readonly financial?: {
		readonly name: PersonName;
		readonly quirk: string;
	}; // 1/118
	readonly weather: {
		readonly name: PersonName;
		readonly alternateName?: string;
		readonly quirk: string;
	};
}

// 42
interface WeirdNewscasters_1 {
	readonly anchor: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly coAnchor: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
}

// 19
interface WeirdNewscasters_2 {
	readonly anchor: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly coAnchor: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly quirk: string;
	};
}

// 17
interface WeirdNewscasters_3 {
	readonly anchor: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly coAnchor: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
}

// 12
interface WeirdNewscasters_4 {
	readonly anchor: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly coAnchor: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly quirk: string;
	};
}

// 9
interface WeirdNewscasters_5 {
	readonly anchor: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly coAnchor: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
}

// 8
interface WeirdNewscasters_6 {
	readonly anchor: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly coAnchor: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly quirk: string;
	};
}

// 4
interface WeirdNewscasters_7 {
	readonly anchor: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly coAnchor: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly quirk: string;
	};
}

// 3
interface WeirdNewscasters_8 {
	readonly anchor: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly coAnchor: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
}

// 1
interface WeirdNewscasters_9 {
	readonly anchor: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly coAnchor: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly financial: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
}

// 1
interface WeirdNewscasters_10 {
	readonly anchor: PersonName;
	readonly coAnchor: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly quirk: string;
	};
}

// 1
interface WeirdNewscasters_11 {
	readonly anchor: PersonName;
	readonly coAnchor: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly quirk: string;
	};
}

// 1
interface WeirdNewscasters_12 {
	readonly anchor: PersonName;
	readonly coAnchor: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
	readonly sports: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly weather: {
		readonly name: PersonName;
		readonly alternateName: string;
		readonly quirk: string;
	};
}
