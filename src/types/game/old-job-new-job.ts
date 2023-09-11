import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface OldJobNewJob extends BaseGame<"Old Job, New Job"> {
	readonly performers?: RA2<PersonName> | RA3<PersonName>; // 25/27
	readonly oldJobPerformers?: RA1<PersonName> | RA2<PersonName>; // 23/27
	readonly scene: string;
	readonly oldJob?: string; // 25/27
}

// 20
interface OldJobNewJob_1 {
	readonly performers: RA2<PersonName>;
	readonly oldJobPerformers: RA1<PersonName>;
	readonly scene: string;
	readonly oldJob: string;
}

// 2
interface OldJobNewJob_2 {
	readonly performers: RA2<PersonName>;
	readonly oldJobPerformers: RA1<PersonName>;
	readonly scene: string;
}

// 2
interface OldJobNewJob_3 {
	readonly performers: RA3<PersonName>;
	readonly scene: string;
	readonly oldJob: string;
}

// 2
interface OldJobNewJob_4 {
	readonly scene: string;
	readonly oldJob: string;
}

// 1
interface OldJobNewJob_5 {
	readonly performers: RA2<PersonName>;
	readonly oldJobPerformers: RA2<PersonName>;
	readonly scene: string;
	readonly oldJob: string;
}
