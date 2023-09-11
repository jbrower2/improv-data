import { Episode } from "./episode";
import { PersonName } from "./person";

export interface Season {
	readonly number: number;
	readonly episodes: readonly Episode<PersonName>[];
}
