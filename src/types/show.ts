import { Season } from "./season.js";

export interface Show {
	readonly name: string;
	readonly seasons: readonly Season[];
}
