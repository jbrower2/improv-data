import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface TwoCharacters extends BaseGame<"Two Characters"> {
	readonly performers: RA2<PersonName>;
	readonly characters: RA2<string>;
	readonly scene: string;
}
