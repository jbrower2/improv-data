import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface FixedExpression extends BaseGame<"Fixed Expression"> {
	readonly scene: string;
	readonly performers: RA<{
		readonly name: PersonName;
		readonly expression: string;
	}>;
}

// 3
interface FixedExpression_1 {
	readonly scene: string;
	readonly performers: RA<{
		readonly name: PersonName;
		readonly expression: string;
	}>;
}

// 2
interface FixedExpression_2 {
	readonly scene: string;
	readonly performers: RA3<{
		readonly name: PersonName;
		readonly expression: string;
	}>;
}
