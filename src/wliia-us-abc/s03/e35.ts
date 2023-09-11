import { type Episode } from "../../types/episode.js";

export const e35: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 35,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-35",
	airdate: "2001-05-10",
	productionNumber: "296722-339",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Kathy, a frustrated wealthy woman who lives on a horse ranch, has called over hunky pool-boy Ryan to clean her pool, Wayne is her jealous husband who arrives home early on his prized stallion",
			notes: [
				"Do it like you're _Baywatch_ lifeguards",
				"Do it like you have got too much caffeine",
				"Do it like supermodels",
			],
		},
		{
			name: "Infomercial",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			product: "Diet aid",
		},
		{
			name: "Action Replay",
			actors: ["Wayne Brady", "Kathy Greenwood"],
			reEnacters: ["Ryan Stiles", "Colin Mochrie"],
			originalScene:
				"A couple on their honeymoon entering the bridal suite, as they are getting ready for bed they spot a mouse",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Race Car Driver_",
			songs: [
				{
					style: "Macy Gray",
					title: "Gonna Walk Away When There's Fire",
				},
				{
					style: "Honky tonk",
					title: "Rabbit on the Track",
				},
				{
					style: "Louis Jordan",
					title: "Five Guys and a Motor",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Colin Mochrie"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
