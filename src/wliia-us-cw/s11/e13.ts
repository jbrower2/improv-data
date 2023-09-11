import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kearran Giovanni"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-13",
	airdate: "2023-03-17",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Kearran Giovanni"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk: 'The "Scarface"-style rise of a gangster alley cat',
				},
				{
					name: "Colin Mochrie",
					quirk: "Parrot overwhelmed with lust",
				},
				{
					name: "Ryan Stiles",
					quirk: "The worst mother in the world",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Wayne Brady", "Jonathan Mangum"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Rats",
		},
		{
			name: "Dubbing",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			dubber: "Wayne Brady",
			dubbed: "Kearran Giovanni",
			scene:
				"Police sergeant Ryan is putting rookie Kearran through her paces at police college when suddenly, Colin enters to prove to he's the best recruit",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things that you wouldn't see or hear on a cooking show",
				"If famous movie scenes were performed by very old people",
				"Inappropriate songs for a wedding band to sing",
				"Pick-up lines at the auto repair shop",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Coast Guard Sailor Guys_",
			songs: [
				{
					style: "Russian folk",
					title: "Man Overboard",
				},
				{
					style: "Bro country",
					title: "She's Taking Water",
				},
			],
		},
	],
};
