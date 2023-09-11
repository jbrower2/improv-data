import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface HollywoodDirector extends BaseGame<"Hollywood Director"> {
	readonly director: PersonName;
	readonly musicians?: RA2<PersonName>; // 4/71
	readonly actors?: RA2<PersonName> | RA3<PersonName>; // 3/71
	readonly scene: string;
	readonly notes: RA<string>;
}

// 30
interface HollywoodDirector_1 {
	readonly director: PersonName;
	readonly scene: string;
	readonly notes: RA3<string>;
}

// 30
interface HollywoodDirector_2 {
	readonly director: PersonName;
	readonly scene: string;
	readonly notes: RA2<string>;
}

// 4
interface HollywoodDirector_3 {
	readonly director: PersonName;
	readonly musicians: RA2<PersonName>;
	readonly scene: string;
	readonly notes: RA2<string>;
}

// 3
interface HollywoodDirector_4 {
	readonly director: PersonName;
	readonly scene: string;
	readonly notes: RA<string>;
}

// 1
interface HollywoodDirector_5 {
	readonly director: PersonName;
	readonly scene: string;
	readonly notes: RA1<string>;
}

// 1
interface HollywoodDirector_6 {
	readonly director: PersonName;
	readonly actors: RA2<PersonName>;
	readonly scene: string;
	readonly notes: RA<string>;
}

// 1
interface HollywoodDirector_7 {
	readonly director: PersonName;
	readonly actors: RA2<PersonName>;
	readonly scene: string;
	readonly notes: RA3<string>;
}

// 1
interface HollywoodDirector_8 {
	readonly director: PersonName;
	readonly actors: RA3<PersonName>;
	readonly scene: string;
	readonly notes: RA3<string>;
}
