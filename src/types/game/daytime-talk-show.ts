import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface DaytimeTalkShow extends BaseGame<"Daytime Talk Show"> {
	readonly host: PersonName;
	readonly guests: RA2<PersonName> | RA3<PersonName>;
	readonly audienceMembers?: RA1<PersonName> | RA2<PersonName>; // 17/18
	readonly topic: string;
}

// 16
interface DaytimeTalkShow_1 {
	readonly host: PersonName;
	readonly guests: RA2<PersonName>;
	readonly audienceMembers: RA1<PersonName>;
	readonly topic: string;
}

// 1
interface DaytimeTalkShow_2 {
	readonly host: PersonName;
	readonly guests: RA3<PersonName>;
	readonly topic: string;
}

// 1
interface DaytimeTalkShow_3 {
	readonly host: PersonName;
	readonly guests: RA2<PersonName>;
	readonly audienceMembers: RA2<PersonName>;
	readonly topic: string;
}
