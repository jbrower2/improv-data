import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface SceneWithAProp extends BaseGame<"Scene with a Prop"> {
	readonly performers: RA2<PersonName>;
	readonly prop: string;
}
