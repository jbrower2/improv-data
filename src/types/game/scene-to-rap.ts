import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface SceneToRap extends BaseGame<"Scene to Rap"> {
	readonly rappers?: RA<PersonName>; // 1/25
	readonly musicians?: RA1<PersonName> | RA2<PersonName>; // 24/25
	readonly scene: string;
}

// 15
interface SceneToRap_1 {
	readonly musicians: RA1<PersonName>;
	readonly scene: string;
}

// 8
interface SceneToRap_2 {
	readonly musicians: RA2<PersonName>;
	readonly scene: string;
}

// 1
interface SceneToRap_3 {
	readonly scene: string;
}

// 1
interface SceneToRap_4 {
	readonly rappers: RA<PersonName>;
	readonly musicians: RA1<PersonName>;
	readonly scene: string;
}
