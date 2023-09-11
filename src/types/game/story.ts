import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface Story extends BaseGame<"Story"> {
	readonly leader?: PersonName; // 11/12
	readonly performers?: RA3<PersonName>; // 1/12
	readonly storytellers?: RA<PersonName>; // 8/12
	readonly title: string;
	readonly moral?: string; // 4/12
}

// 8
interface Story_1 {
	readonly leader: PersonName;
	readonly storytellers: RA<PersonName>;
	readonly title: string;
}

// 2
interface Story_2 {
	readonly leader: PersonName;
	readonly title: string;
	readonly moral: string;
}

// 1
interface Story_3 {
	readonly title: string;
	readonly moral: string;
}

// 1
interface Story_4 {
	readonly leader: PersonName;
	readonly performers: RA3<PersonName>;
	readonly title: string;
	readonly moral: string;
}
