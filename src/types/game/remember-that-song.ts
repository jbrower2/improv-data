import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface RememberThatSong extends BaseGame<"Remember That Song"> {
	readonly barman: PersonName;
	readonly musician: PersonName;
	readonly performers: RA2<{
		readonly name: PersonName;
		readonly song: string;
	}>;
}
