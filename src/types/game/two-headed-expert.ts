import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface TwoHeadedExpert extends BaseGame<"Two-Headed Expert"> {
	readonly expert: RA2<PersonName>;
	readonly interviewer?: RA2<PersonName>; // 8/9
	readonly otherExpert?: RA2<PersonName>; // 1/9
	readonly scene: string;
}

// 8
interface TwoHeadedExpert_1 {
	readonly expert: RA2<PersonName>;
	readonly interviewer: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface TwoHeadedExpert_2 {
	readonly expert: RA2<PersonName>;
	readonly otherExpert: RA2<PersonName>;
	readonly scene: string;
}
