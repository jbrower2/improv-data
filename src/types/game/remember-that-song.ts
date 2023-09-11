import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface RememberThatSong extends BaseGame<"Remember That Song"> {
	readonly barman: PersonName;
	readonly musician: PersonName;
	readonly performers: RA2<{
		readonly name: PersonName;
		readonly song: string;
	}>;
}
