import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface Couples extends BaseGame<"Couples"> {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
	readonly couples: RA<string>;
}
