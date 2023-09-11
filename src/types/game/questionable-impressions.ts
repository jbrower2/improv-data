import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface QuestionableImpressions
	extends BaseGame<"Questionable Impressions"> {
	readonly scene: string;
}
