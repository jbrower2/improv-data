import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface MeetTheFamily extends BaseGame<"Meet the Family"> {
	readonly father: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly mother: {
		readonly name: PersonName;
		readonly quirk: string;
	};
	readonly scene: string;
}
