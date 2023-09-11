import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface RemoteControl extends BaseGame<"Remote Control"> {
	readonly topic: string;
	readonly performers: RA<{
		readonly name: PersonName;
		readonly quirk: string;
	}>;
}
