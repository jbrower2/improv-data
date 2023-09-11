import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface Props extends BaseGame<"Props"> {
	readonly pairs: RA<RA2<PersonName> | RA3<PersonName>>;
}

// 206
interface Props_1 {
	readonly pairs: RA2<RA2<PersonName>>;
}

// 2
interface Props_2 {
	readonly pairs: RA3<RA2<PersonName>>;
}

// 1
interface Props_3 {
	readonly pairs: RA1<RA2<PersonName>>;
}

// 1
interface Props_4 {
	readonly pairs: RA2<RA2<PersonName> | RA3<PersonName>>;
}
