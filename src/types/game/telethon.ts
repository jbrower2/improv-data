import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Telethon extends BaseGame<"Telethon"> {
	readonly hosts: RA1<PersonName> | RA2<PersonName>;
	readonly guest?: PersonName; // 1/4
	readonly singers: RA2<PersonName>;
	readonly musicians: RA1<PersonName> | RA2<PersonName>;
	readonly topic: string;
	readonly celebrities: RA2<
		| string
		| {
				readonly name: PersonName;
				readonly celebrities: RA<string>;
		  }
	>;
}

// 1
interface Telethon_1 {
	readonly singers: RA2<PersonName>;
	readonly hosts: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly topic: string;
	readonly celebrities: RA2<string>;
}

// 1
interface Telethon_2 {
	readonly hosts: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly topic: string;
	readonly celebrities: RA2<{
		readonly name: PersonName;
		readonly celebrities: RA3<string>;
	}>;
}

// 1
interface Telethon_3 {
	readonly hosts: RA1<PersonName>;
	readonly guest: PersonName;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly topic: string;
	readonly celebrities: RA2<{
		readonly name: PersonName;
		readonly celebrities: RA2<string> | RA3<string>;
	}>;
}

// 1
interface Telethon_4 {
	readonly hosts: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musicians: RA2<PersonName>;
	readonly topic: string;
	readonly celebrities: RA2<{
		readonly name: PersonName;
		readonly celebrities: RA<string>;
	}>;
}
