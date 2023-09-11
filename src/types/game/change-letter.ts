import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface ChangeLetter extends BaseGame<"Change Letter"> {
	readonly performers: RA<PersonName>;
	readonly rulesPerPlayer?: RA2<{
		readonly name: PersonName;
		readonly cantSay: string;
		readonly mustSay: string;
	}>; // 1/6
	readonly scene: string;
	readonly cantSay?: string; // 5/6
	readonly mustSay?: string; // 5/6
}

// 4
interface ChangeLetter_1 {
	readonly performers: RA<PersonName>;
	readonly scene: string;
	readonly cantSay: string;
	readonly mustSay: string;
}

// 1
interface ChangeLetter_2 {
	readonly performers: RA2<PersonName>;
	readonly rulesPerPlayer: RA2<{
		readonly name: PersonName;
		readonly cantSay: string;
		readonly mustSay: string;
	}>;
	readonly scene: string;
}

// 1
interface ChangeLetter_3 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly cantSay: string;
	readonly mustSay: string;
}
