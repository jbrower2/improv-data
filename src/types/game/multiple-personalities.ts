import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface MultiplePersonalities
	extends BaseGame<"Multiple Personalities"> {
	readonly performers: RA3<PersonName>;
	readonly props: RA3<{
		readonly prop: string;
		readonly personality: string | PersonName;
	}>;
	readonly scene: string;
}

// 5
interface MultiplePersonalities_1 {
	readonly performers: RA3<PersonName>;
	readonly props: RA3<{
		readonly prop: string;
		readonly personality: string;
	}>;
	readonly scene: string;
}

// 2
interface MultiplePersonalities_2 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly props: RA3<{
		readonly prop: string;
		readonly personality: string;
	}>;
}

// 1
interface MultiplePersonalities_3 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly props: RA3<{
		readonly prop: string;
		readonly personality: string | PersonName;
	}>;
}
