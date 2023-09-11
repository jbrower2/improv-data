import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface FashionModels extends BaseGame<"Fashion Models"> {
	readonly commentators: RA1<PersonName> | RA2<PersonName>;
	readonly models: RA2<PersonName> | RA3<PersonName>;
	readonly job: string;
}

// 6
interface FashionModels_1 {
	readonly commentators: RA1<PersonName>;
	readonly models: RA3<PersonName>;
	readonly job: string;
}

// 1
interface FashionModels_2 {
	readonly commentators: RA2<PersonName>;
	readonly models: RA2<PersonName>;
	readonly job: string;
}
