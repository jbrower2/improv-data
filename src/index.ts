import { gs } from "./gs";
import { iag } from "./iag";
import { type Show } from "./types/show";
import { wliiaAu } from "./wliia-au";
import { wliiaUk } from "./wliia-uk";
import { wliiaUsAbc } from "./wliia-us-abc";
import { wliiaUsCw } from "./wliia-us-cw";

export const shows: readonly Show[] = [
	gs,
	iag,
	wliiaAu,
	wliiaUk,
	wliiaUsAbc,
	wliiaUsCw,
];
