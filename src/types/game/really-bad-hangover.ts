import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface ReallyBadHangover extends BaseGame<"Really Bad Hangover"> {
	readonly performers: RA2<PersonName>;
	readonly sounds: RA2<PersonName>;
	readonly scene: string;
}
