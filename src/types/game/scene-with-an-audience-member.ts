import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface SceneWithAnAudienceMember
	extends BaseGame<"Scene with an Audience Member"> {
	readonly performers: RA2<PersonName>;
	readonly audienceMember: string;
	readonly scene: string;
}
