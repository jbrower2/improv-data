import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface ImprobableMission extends BaseGame<"Improbable Mission"> {
	readonly agents?: RA2<PersonName> | RA3<PersonName>; // 17/18
	readonly performers?: RA2<PersonName>; // 1/18
	readonly voiceOnTape: PersonName;
	readonly mission: string;
}

// 15
interface ImprobableMission_1 {
	readonly agents: RA2<PersonName>;
	readonly voiceOnTape: PersonName;
	readonly mission: string;
}

// 2
interface ImprobableMission_2 {
	readonly agents: RA3<PersonName>;
	readonly voiceOnTape: PersonName;
	readonly mission: string;
}

// 1
interface ImprobableMission_3 {
	readonly performers: RA2<PersonName>;
	readonly voiceOnTape: PersonName;
	readonly mission: string;
}
