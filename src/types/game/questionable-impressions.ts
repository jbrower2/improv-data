import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface QuestionableImpressions
	extends BaseGame<"Questionable Impressions"> {
	readonly scene: string;
}
