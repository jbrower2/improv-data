import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface HollywoodMoments extends BaseGame<"Hollywood Moments"> {
	readonly performers: RA3<PersonName>;
	readonly moderators: RA1<PersonName>;
	readonly scene: string;
}