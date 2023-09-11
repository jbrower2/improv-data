import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface VideoPlayer extends BaseGame<"Video Player"> {
	readonly remoteController: PersonName;
	readonly film: string;
}
