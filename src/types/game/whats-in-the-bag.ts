import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface WhatsInTheBag extends BaseGame<"What's in the Bag?"> {
	readonly performers: RA3<PersonName>;
	readonly bagDonors?: RA2<string>; // 7/9
	readonly scene: string;
}

// 7
interface WhatsInTheBag_1 {
	readonly performers: RA3<PersonName>;
	readonly bagDonors: RA2<string>;
	readonly scene: string;
}

// 2
interface WhatsInTheBag_2 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
}
