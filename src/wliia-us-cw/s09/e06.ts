import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-06",
	airdate: "2021-02-19",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt during a space mission",
		},
		{
			name: "Doo-wop",
			singers: ["Ryan Stiles", "Wayne Brady", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Debbie, who died tragically in a meat-related accident",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Kids TV characters that never took off",
				"If all American sports were played drunk",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Colin is the puppet-maker Gepetto",
				"Ryan is his wooden boy Pinocchio",
				"so very desperate to be a real boy",
			],
			lines: [
				"I'm pregnant; it's yours.",
				"I woke up naked in a dumpster.",
				"Your face looks like a butt.",
				"Ooh, that's a smell I'll never forget.",
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Fireman](https://whoselineisitanyway.fandom.com/wiki/Fireman_Hoedown)",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Farmer_",
			songs: [
				{
					style: "Tap dancing",
					title: "Hens in the Coop",
				},
				{
					style: "Adele",
					title: "Milking with Cold Hands",
				},
			],
		},
	],
};
