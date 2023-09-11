import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface SoundEffects extends BaseGame<"Sound Effects"> {
	readonly actorPerformers?: RA1<PersonName>; // 50/52
	readonly soundPerformers?: RA1<PersonName>; // 50/52
	readonly performers?: RA2<PersonName> | RA3<PersonName>; // 2/52
	readonly sounds?: string; // 2/52
	readonly scene: string;
}

// 50
interface SoundEffects_1 {
	readonly actorPerformers: RA1<PersonName>;
	readonly soundPerformers: RA1<PersonName>;
	readonly scene: string;
}

// 1
interface SoundEffects_2 {
	readonly performers: RA3<PersonName>;
	readonly sounds: string;
	readonly scene: string;
}

// 1
interface SoundEffects_3 {
	readonly performers: RA2<PersonName>;
	readonly sounds: string;
	readonly scene: string;
}
