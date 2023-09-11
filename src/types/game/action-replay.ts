import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface ActionReplay extends BaseGame<"Action Replay"> {
	readonly actors: RA2<PersonName>;
	readonly reEnacters: RA2<PersonName>;
	readonly originalScene: string;
}
