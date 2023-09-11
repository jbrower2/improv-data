import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-08",
	airdate: "2022-01-08",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Grandmother on her motorized cart collecting her friends for a party back at her place",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Scottish fortune teller who can tell people's futures by reading their buttocks",
				},
				{
					name: "Ryan Stiles",
					quirk: "Melodramatic Noah preparing for the imminent flood",
				},
			],
		},
		{
			name: "Radio Show",
			radioDjs: ["Wayne Brady", "Jonathan Mangum"],
			callers: ["Ryan Stiles", "Colin Mochrie"],
			about: "Sloths",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Deleted scenes from _90210_",
				"World's worst person to share an apartment with",
				"Songs that celebrate divorce",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Movie Star_",
			songs: [
				{
					style: "Blink-182",
					title: "Red-Carpet Treatment",
				},
				{
					style: "Ska",
					title: "No Pictures Please",
				},
				{
					style: "Mumford and Sons",
					title: "I Got People for Everything",
				},
			],
		},
	],
};
