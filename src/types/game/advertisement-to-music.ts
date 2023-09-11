import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface AdvertisementToMusic
	extends BaseGame<"Advertisement to Music"> {
	readonly performers:
		| RA1<{
				readonly name: PersonName;
				readonly product: string;
		  }>
		| RA2<{
				readonly name: PersonName;
				readonly product: string;
		  }>;
}

// 1
interface AdvertisementToMusic_1 {
	readonly performers: RA2<{
		readonly name: PersonName;
		readonly product: string;
	}>;
}

// 1
interface AdvertisementToMusic_2 {
	readonly performers: RA1<{
		readonly name: PersonName;
		readonly product: string;
	}>;
}
