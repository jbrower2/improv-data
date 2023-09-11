import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface ForwardRewind extends BaseGame<"Forward Rewind"> {
	readonly performers?: RA<PersonName>; // 9/17
	readonly moderators?: RA1<PersonName>; // 4/17
	readonly scene: string;
}

// 8
interface ForwardRewind_1 {
	readonly scene: string;
}

// 3
interface ForwardRewind_2 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}

// 2
interface ForwardRewind_3 {
	readonly performers: RA<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scene: string;
}

// 2
interface ForwardRewind_4 {
	readonly performers: RA2<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scene: string;
}

// 2
interface ForwardRewind_5 {
	readonly performers: RA<PersonName>;
	readonly scene: string;
}
