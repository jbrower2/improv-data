import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface MusicalProducers extends BaseGame<"Musical Producers"> {
	readonly producers: RA2<PersonName>;
	readonly singers?: RA2<PersonName>; // 4/5
	readonly actors?: RA<PersonName>; // 1/5
	readonly musician: PersonName;
	readonly topics: RA1<string> | RA3<string>;
}

// 4
interface MusicalProducers_1 {
	readonly producers: RA2<PersonName>;
	readonly singers: RA2<PersonName>;
	readonly musician: PersonName;
	readonly topics: RA1<string>;
}

// 1
interface MusicalProducers_2 {
	readonly producers: RA2<PersonName>;
	readonly actors: RA<PersonName>;
	readonly musician: PersonName;
	readonly topics: RA3<string>;
}
