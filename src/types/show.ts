import { Season } from "./season";

export interface Show {
	readonly name: string;
	readonly seasons: readonly Season[];
}
