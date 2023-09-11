import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface ExpertTranslation extends BaseGame<"Expert Translation"> {
	readonly expert: PersonName;
	readonly translator: PersonName;
	readonly language: string;
	readonly topic: string;
}
