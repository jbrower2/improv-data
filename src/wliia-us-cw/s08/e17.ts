import { type Episode } from "../../types/episode.js";

export const e17: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-17",
	airdate: "2020-10-12",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "World's Worst",
			scenes: ["Clips from the world's worst sci-fi movie"],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Maria, who died tragically in a plumbing accident",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Jeff Davis"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Butts",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Lines you wouldn't hear in a tourism commercial",
				"Annoying people to share an office with",
				"Bad things to read on a prescription bottle",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Zookeeper_",
			songs: [
				{
					style: "Gangsta rap with gangsters",
					title: "The Snakes Don't Have a Pit to Hiss In",
				},
				{
					style: "Scottish rock",
					title: "Tranquilizer Dart",
				},
			],
		},
	],
};
