import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Interview extends BaseGame<"Interview"> {
	readonly interviews:
		| RA1<{
				readonly interviewer: PersonName;
				readonly style: string;
				readonly name: PersonName;
				readonly character: string;
		  }>
		| RA2<{
				readonly interviewer: PersonName;
				readonly style: string;
				readonly name: PersonName;
				readonly character: string;
		  }>;
}

// 6
interface Interview_1 {
	readonly interviews: RA1<{
		readonly interviewer: PersonName;
		readonly style: string;
		readonly name: PersonName;
		readonly character: string;
	}>;
}

// 2
interface Interview_2 {
	readonly interviews: RA2<{
		readonly interviewer: PersonName;
		readonly style: string;
		readonly name: PersonName;
		readonly character: string;
	}>;
}
