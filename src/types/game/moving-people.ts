import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface MovingPeople extends BaseGame<"Moving People"> {
	readonly performers: RA2<PersonName> | RA3<PersonName>;
	readonly moversFromTheAudience?: RA2<string>; // 33/37
	readonly movers?: RA2<PersonName> | RA3<PersonName>; // 2/37
	readonly scene: string;
	readonly trivia?: string; // 1/37
}

// 32
interface MovingPeople_1 {
	readonly performers: RA2<PersonName>;
	readonly moversFromTheAudience: RA2<string>;
	readonly scene: string;
}

// 2
interface MovingPeople_2 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface MovingPeople_3 {
	readonly performers: RA3<PersonName>;
	readonly movers: RA3<PersonName>;
	readonly scene: string;
}

// 1
interface MovingPeople_4 {
	readonly performers: RA2<PersonName>;
	readonly movers: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface MovingPeople_5 {
	readonly performers: RA2<PersonName>;
	readonly moversFromTheAudience: RA2<string>;
	readonly scene: string;
	readonly trivia: string;
}
