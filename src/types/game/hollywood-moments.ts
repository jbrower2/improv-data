import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface HollywoodMoments extends BaseGame<"Hollywood Moments"> {
	readonly performers: RA3<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scene: string;
}
