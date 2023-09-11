import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface PressConference extends BaseGame<"Press Conference"> {
	readonly publicFigure: PersonName;
	readonly journalists?: RA3<PersonName>; // 2/18
	readonly topic?: string; // 14/18
	readonly scene?: string; // 4/18
}

// 13
interface PressConference_1 {
	readonly publicFigure: PersonName;
	readonly topic: string;
}

// 3
interface PressConference_2 {
	readonly publicFigure: PersonName;
	readonly scene: string;
}

// 1
interface PressConference_3 {
	readonly publicFigure: PersonName;
	readonly journalists: RA3<PersonName>;
	readonly scene: string;
}

// 1
interface PressConference_4 {
	readonly publicFigure: PersonName;
	readonly journalists: RA3<PersonName>;
	readonly topic: string;
}
