import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface SoundEffectsWithAudienceMembers
	extends BaseGame<"Sound Effects (with Audience Members)"> {
	readonly performers?: RA2<PersonName>; // 80/81
	readonly audienceMembers?: RA2<string>; // 80/81
	readonly actorPerformers?: RA2<PersonName>; // 1/81
	readonly soundPerformers?: RA1<PersonName>; // 1/81
	readonly scene: string;
}

// 79
interface SoundEffectsWithAudienceMembers_1 {
	readonly performers: RA2<PersonName>;
	readonly audienceMembers: RA2<string>;
	readonly scene: string;
}

// 1
interface SoundEffectsWithAudienceMembers_2 {
	readonly actorPerformers: RA2<PersonName>;
	readonly soundPerformers: RA1<PersonName>;
	readonly scene: string;
}

// 1
interface SoundEffectsWithAudienceMembers_3 {
	readonly audienceMembers: RA2<string>;
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}
