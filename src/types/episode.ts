import { type Game } from "./game/index.js";
import {
	type PersonName,
	type PersonWithOptionalAlternateName,
} from "./person";
import { type RA } from "./readonly-array.js";

export interface Episode<P extends PersonName> {
	readonly number: number;
	readonly wikiUrl: string;
	readonly airdate: string;
	readonly productionNumber?: string;
	readonly host: P;
	readonly performers: RA<P>;
	readonly guests?: RA<PersonWithOptionalAlternateName<P>>;
	readonly musicians?: RA<PersonWithOptionalAlternateName<P>>;
	readonly games: RA<Game>;
}
