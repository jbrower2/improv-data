import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface ReallyBadHangover extends BaseGame<"Really Bad Hangover"> {
	readonly performers: RA2<PersonName>;
	readonly sounds: RA2<PersonName>;
	readonly scene: string;
}
