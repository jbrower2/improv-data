import { Episode } from "./episode.js";
import { PersonName } from "./person.js";

export interface Season {
	readonly number: number;
	readonly episodes: readonly Episode<PersonName>[];
}
