import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface QuestionsWithHats extends BaseGame<"Questions with Hats"> {
	readonly scene: string;
}
