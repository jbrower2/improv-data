import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kyle Richards"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-10",
	airdate: "2022-04-09",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Kyle Richards"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Forward Rewind",
			scene:
				"Wayne and Jonathan are two frat boys, and they are packing their car for a crazy road trip, and they drive off, and they stop to pick up a weird hitchhiker, Ryan; a motorcycle cop played by Colin pulls them all over",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Strange things to hear your GPS say",
				"Mishaps at the Space Station",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kyle",
			styles: ["Boy band"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Mina", "Karen"],
			scene:
				"Ryan and Colin are two construction workers on a busy site when an alien invasion suddenly happens; our two heroes have to fight back using their old, very old, army training",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of a Movie Star_",
			songs: [
				{
					style: "Bollywood",
					title: "Weed on the Bus",
				},
				{
					style: "Jay-Z and Rick Astley",
					title: "They Spelt My Name Wrong in the Tabloids",
				},
			],
		},
	],
};
