import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface ThisIsTheStoryOfYourLife
	extends BaseGame<"This Is the Story of Your Life"> {
	readonly host: PersonName;
	readonly honoree: {
		readonly name: PersonName;
		readonly alternateName: string;
	};
	readonly guestsFromThePast: RA2<PersonName>;
}
