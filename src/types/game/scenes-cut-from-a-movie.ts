import { type BaseGame } from "../base-game";
import { type PersonName } from "../person";
import { type RA, type RA1, type RA2, type RA3 } from "../readonly-array";

export interface ScenesCutFromAMovie
	extends BaseGame<"Scenes Cut from a Movie"> {
	readonly movies: RA<string>;
}
