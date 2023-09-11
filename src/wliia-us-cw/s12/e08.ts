import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Jeff Davis"
	| "Gary Anthony Williams"
	| "Jonathan Mangum"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-08",
	airdate: "2023-05-19",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Colin Mochrie",
		"Ryan Stiles",
		"Jeff Davis",
		"Gary Anthony Williams",
		"Jonathan Mangum",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Kick It",
			alternateName: "Get Down",
			performers: [
				"Wayne Brady",
				"Jonathan Mangum",
				"Ryan Stiles",
				"Colin Mochrie",
			],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene:
				"In the ER, an injured Wayne staggers to get treatment from stressed out Dr. Jonathan.  After a while, sexy nurse Ryan comes in to help and then Colin enters with an even greater injury",
		},
		{
			name: "Lounge Lizards",
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Rowing",
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit for hair growth",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely things to read in a fortune cookie",
				"Unlikely things to hear at Christmas",
				"The worst times to insult someone",
				"Bad things to say through a megaphone",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Gary Anthony Williams", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Noses",
		},
		{
			name: "Show-Stopping Number",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "In a home improvement store",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of New York/Songs of the Park_",
			songs: [
				{
					style: "Creed",
					title: "Statue of Liberty",
				},
				{
					style: "Daft Punk",
					title: "Squirrels, Squirrels, Squirrels",
				},
			],
		},
	],
};
