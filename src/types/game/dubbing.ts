import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface Dubbing extends BaseGame<"Dubbing"> {
	readonly performers: RA2<PersonName>;
	readonly dubber: PersonName;
	readonly dubbed?: PersonName; // 44/48
	readonly musicians?: RA1<PersonName> | RA2<PersonName>; // 4/48
	readonly audienceMember?: string; // 4/48
	readonly scene: string;
}

// 40
interface Dubbing_1 {
	readonly performers: RA2<PersonName>;
	readonly dubber: PersonName;
	readonly dubbed: PersonName;
	readonly scene: string;
}

// 4
interface Dubbing_2 {
	readonly performers: RA2<PersonName>;
	readonly dubber: PersonName;
	readonly audienceMember: string;
	readonly scene: string;
}

// 2
interface Dubbing_3 {
	readonly performers: RA2<PersonName>;
	readonly dubber: PersonName;
	readonly dubbed: PersonName;
	readonly musicians: RA1<PersonName>;
	readonly scene: string;
}

// 2
interface Dubbing_4 {
	readonly performers: RA2<PersonName>;
	readonly dubber: PersonName;
	readonly dubbed: PersonName;
	readonly musicians: RA2<PersonName>;
	readonly scene: string;
}
