import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-20",
	airdate: "2000-01-20",
	productionNumber: "296718-215",
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
			name: "Questions Only",
			scenes: ["A wedding at a nudist colony"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"In the Wild West, tough new sheriff Colin, on an urgent mission to clean up the town, arrives at the saloon",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Kathy Greenwood"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Kathy Greenwood", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Maggots",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Attorney_",
			songs: [
				{
					style: "Yiddish folk song",
					title: "Sue Him, Sue Him Big",
				},
				{
					style: "Jug band",
					title: "Sequester This",
				},
				{
					style: "Yoko Ono",
					title: "Attornee-ee-ey",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Kathy Greenwood", "Drew Carey"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Swedish"],
			title: "_Bikini Jones_",
		},
	],
};
