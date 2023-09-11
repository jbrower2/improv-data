import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Tag extends BaseGame<"Tag"> {
	readonly performers?: RA<PersonName>; // 2/26
	readonly startingPositions: RA2<{
		readonly startingPosition: string;
		readonly name: PersonName;
	}>;
}

// 24
interface Tag_1 {
	readonly startingPositions: RA2<{
		readonly startingPosition: string;
		readonly name: PersonName;
	}>;
}

// 2
interface Tag_2 {
	readonly performers: RA<PersonName>;
	readonly startingPositions: RA2<{
		readonly startingPosition: string;
		readonly name: PersonName;
	}>;
}
