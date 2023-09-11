import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface MakeAMonster extends BaseGame<"Make a Monster"> {
	readonly musicians: RA2<PersonName>;
	readonly drFrankenstein: PersonName;
	readonly igor: PersonName;
	readonly franksteinSMonster: {
		readonly name: PersonName;
		readonly bodyParts: RA<{
			readonly bodyPart: string;
			readonly character: string;
		}>;
	};
	readonly brideOfFrankenstein: {
		readonly name: PersonName;
		readonly bodyParts: RA<{
			readonly bodyPart: string;
			readonly character: string;
		}>;
	};
}

// 1
interface MakeAMonster_1 {
	readonly musicians: RA2<PersonName>;
	readonly drFrankenstein: PersonName;
	readonly igor: PersonName;
	readonly franksteinSMonster: {
		readonly name: PersonName;
		readonly bodyParts: RA<{
			readonly bodyPart: string;
			readonly character: string;
		}>;
	};
	readonly brideOfFrankenstein: {
		readonly name: PersonName;
		readonly bodyParts: RA<{
			readonly bodyPart: string;
			readonly character: string;
		}>;
	};
}

// 1
interface MakeAMonster_2 {
	readonly musicians: RA2<PersonName>;
	readonly drFrankenstein: PersonName;
	readonly igor: PersonName;
	readonly franksteinSMonster: {
		readonly name: PersonName;
		readonly bodyParts: RA3<{
			readonly bodyPart: string;
			readonly character: string;
		}>;
	};
	readonly brideOfFrankenstein: {
		readonly name: PersonName;
		readonly bodyParts: RA3<{
			readonly bodyPart: string;
			readonly character: string;
		}>;
	};
}
