import { gs } from "./gs/index.js";
import { iag } from "./iag/index.js";
import { type Show } from "./types/show.js";
import { wliiaAu } from "./wliia-au/index.js";
import { wliiaUk } from "./wliia-uk/index.js";
import { wliiaUsAbc } from "./wliia-us-abc/index.js";
import { wliiaUsCw } from "./wliia-us-cw/index.js";

export const shows: readonly Show[] = [
	gs,
	iag,
	wliiaAu,
	wliiaUk,
	wliiaUsAbc,
	wliiaUsCw,
];
