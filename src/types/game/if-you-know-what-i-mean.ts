import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface IfYouKnowWhatIMean
	extends BaseGame<"If You Know What I Mean"> {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
}
