import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface PartyQuirks extends BaseGame<"Party Quirks"> {
	readonly host: PersonName;
	readonly guests: RA<{
		readonly name?: PersonName;
		readonly names?: RA2<PersonName>;
		readonly quirk: string | PersonName;
	}>;
}

// 146
interface PartyQuirks_1 {
	readonly host: PersonName;
	readonly guests: RA3<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 1
interface PartyQuirks_2 {
	readonly host: PersonName;
	readonly guests: RA<{
		readonly name?: PersonName;
		readonly names?: RA2<PersonName>;
		readonly quirk: string;
	}>;
}

// 1
interface PartyQuirks_3 {
	readonly host: PersonName;
	readonly guests: RA1<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}

// 1
interface PartyQuirks_4 {
	readonly host: PersonName;
	readonly guests: RA3<{
		readonly name: PersonName;
		readonly quirk: string | PersonName;
	}>;
}
