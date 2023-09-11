import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface TwoCharacters extends BaseGame<"Two Characters"> {
	readonly performers: RA2<PersonName>;
	readonly characters: RA2<string>;
	readonly scene: string;
}
