import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface ThisIsTheStoryOfYourLife
	extends BaseGame<"This Is the Story of Your Life"> {
	readonly host: PersonName;
	readonly honoree: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly guestsFromThePast: RA2<PersonName>;
}
