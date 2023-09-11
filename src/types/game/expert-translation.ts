import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface ExpertTranslation extends BaseGame<"Expert Translation"> {
	readonly expert: PersonName;
	readonly translator: PersonName;
	readonly language: string;
	readonly topic: string;
}
