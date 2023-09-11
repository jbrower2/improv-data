import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface LivingScenery extends BaseGame<"Living Scenery"> {
	readonly actors: RA2<PersonName>;
	readonly props: RA<PersonName | string>;
	readonly scene: string;
}

// 51
interface LivingScenery_1 {
	readonly actors: RA2<PersonName>;
	readonly props: RA2<string>;
	readonly scene: string;
}

// 2
interface LivingScenery_2 {
	readonly actors: RA2<PersonName>;
	readonly props: RA3<string>;
	readonly scene: string;
}

// 2
interface LivingScenery_3 {
	readonly actors: RA2<PersonName>;
	readonly props: RA2<PersonName | string>;
	readonly scene: string;
}

// 1
interface LivingScenery_4 {
	readonly actors: RA2<PersonName>;
	readonly props: RA1<PersonName>;
	readonly scene: string;
}
