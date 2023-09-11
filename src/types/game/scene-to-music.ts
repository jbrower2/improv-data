import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface SceneToMusic extends BaseGame<"Scene to Music"> {
	readonly performers: RA2<PersonName> | RA3<PersonName>;
	readonly scene: string;
	readonly music?: string; // 4/16
}

// 12
interface SceneToMusic_1 {
	readonly performers: RA2<PersonName>;
	readonly scene: string;
}

// 4
interface SceneToMusic_2 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly music: string;
}
