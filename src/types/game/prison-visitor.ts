import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface PrisonVisitor extends BaseGame<"Prison Visitor"> {
	readonly visitor: PersonName;
	readonly musician?: PersonName; // 2/3
	readonly prisoners:
		| RA2<{
				readonly name: PersonName;
				readonly crime: string;
		  }>
		| RA3<{
				readonly name: PersonName;
				readonly crime: string;
		  }>;
}

// 1
interface PrisonVisitor_1 {
	readonly visitor: PersonName;
	readonly musician: PersonName;
	readonly prisoners: RA3<{
		readonly name: PersonName;
		readonly crime: string;
	}>;
}

// 1
interface PrisonVisitor_2 {
	readonly visitor: PersonName;
	readonly musician: PersonName;
	readonly prisoners: RA2<{
		readonly name: PersonName;
		readonly crime: string;
	}>;
}

// 1
interface PrisonVisitor_3 {
	readonly visitor: PersonName;
	readonly prisoners: RA3<{
		readonly name: PersonName;
		readonly crime: string;
	}>;
}
