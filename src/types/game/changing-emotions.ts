import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface ChangingEmotions extends BaseGame<"Changing Emotions"> {
	readonly performers: RA3<PersonName>;
	readonly props:
		| RA2<{
				readonly prop: string;
				readonly emotion: string;
		  }>
		| RA3<{
				readonly prop: string;
				readonly emotion: string;
		  }>;
	readonly scene: string;
}

// 3
interface ChangingEmotions_1 {
	readonly performers: RA3<PersonName>;
	readonly props: RA2<{
		readonly prop: string;
		readonly emotion: string;
	}>;
	readonly scene: string;
}

// 1
interface ChangingEmotions_2 {
	readonly performers: RA3<PersonName>;
	readonly props: RA3<{
		readonly prop: string;
		readonly emotion: string;
	}>;
	readonly scene: string;
}
