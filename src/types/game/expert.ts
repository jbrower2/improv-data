import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface Expert extends BaseGame<"Expert"> {
	readonly interviewer: PersonName;
	readonly expert: PersonName;
	readonly topic: string;
}
