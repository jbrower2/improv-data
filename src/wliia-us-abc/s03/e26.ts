import { type Episode } from "../../types/episode.js";

export const e26: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 26,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-26",
	airdate: "2001-04-05",
	productionNumber: "296722-335",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"A novice gladiator making his preparations before entering the Colosseum, trying to win his freedom",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "A vacuum cleaner",
			styles: ["German cabaret song"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Rejected state songs",
				"Canada, the upside",
				"Self-help titles that didn't sell well",
				"Bad things to say when stopped by the police",
				"Things that aren't sexy, done in a sexy way",
				"Rejected sayings on candy heart valentines",
				"Ways you can describe your motorcycle, but not your girlfriend",
			],
		},
		{
			name: "Improbable Mission",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Greg Proops",
			mission: "Cooking (make breakfast for the Grand Poobah of Snackitoba)",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: "Laura and Linda",
			musical: "_Whistler's Mother_",
			song: "Whistle on Cue",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Wayne Brady"],
				["Ryan Stiles", "Drew Carey"],
			],
		},
	],
};
