import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface ThatllBeCharlieNow extends BaseGame<"That'll Be Charlie Now"> {
	readonly charlie?: PersonName; // 3/5
	readonly describers?: RA2<PersonName> | RA3<PersonName>; // 4/5
	readonly guests?: RA2<PersonName>; // 2/5
	readonly characteristics: RA<
		| string
		| {
				readonly name: PersonName;
				readonly characteristics: RA2<string>;
		  }
	>;
	readonly scene: string;
}

// 2
interface ThatllBeCharlieNow_1 {
	readonly charlie: PersonName;
	readonly describers: RA3<PersonName>;
	readonly characteristics: RA<string>;
	readonly scene: string;
}

// 2
interface ThatllBeCharlieNow_2 {
	readonly describers: RA2<PersonName>;
	readonly guests: RA2<PersonName>;
	readonly scene: string;
	readonly characteristics: RA2<{
		readonly name: PersonName;
		readonly characteristics: RA2<string>;
	}>;
}

// 1
interface ThatllBeCharlieNow_3 {
	readonly charlie: PersonName;
	readonly characteristics: RA<string>;
	readonly scene: string;
}
