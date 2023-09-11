import { type BaseGame } from "../base-game.js";
import { type PersonName } from "../person.js";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array.js";

export interface FilmReview extends BaseGame<"Film Review"> {
	readonly reviewer: PersonName;
	readonly filmCritic: string;
	readonly actors: RA3<PersonName>;
	readonly film: string;
}
