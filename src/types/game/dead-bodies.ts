import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface DeadBodies extends BaseGame<"Dead Bodies"> {
	readonly actor: PersonName;
	readonly bodies: RA2<PersonName> | RA3<PersonName>;
	readonly audienceMember?: string; // 5/12
	readonly lastBody?: PersonName; // 4/12
	readonly scene: string;
}

// 5
interface DeadBodies_1 {
	readonly actor: PersonName;
	readonly bodies: RA2<PersonName>;
	readonly audienceMember: string;
	readonly scene: string;
}

// 4
interface DeadBodies_2 {
	readonly actor: PersonName;
	readonly bodies: RA2<PersonName>;
	readonly lastBody: PersonName;
	readonly scene: string;
}

// 3
interface DeadBodies_3 {
	readonly actor: PersonName;
	readonly bodies: RA3<PersonName>;
	readonly scene: string;
}
