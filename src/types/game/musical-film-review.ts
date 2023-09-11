import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

// TODO verify type
export interface MusicalFilmReview extends BaseGame<"Musical Film Review"> {
	readonly reviewer: PersonName;
	readonly musician: PersonName;
	readonly film: string;
}
