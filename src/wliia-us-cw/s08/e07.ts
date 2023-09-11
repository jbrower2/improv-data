import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Cedric the Entertainer"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-07",
	airdate: "2020-05-11",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Cedric the Entertainer"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely things to read in a cookbook",
				"If people behaved like S&M enthusiasts in their regular job",
				"Pickup lines that would never work",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Cedric",
			styles: ["Jamaican dancehall"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Gary Anthony Williams"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Gary Anthony Williams"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Extreme sports wipeouts",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Dallas_",
			songs: [
				{
					style: "Rap battle",
					title: "Clowns in a Barrel",
				},
				{
					style: "The Muppets",
					title: "G is for Gun",
				},
			],
		},
	],
};
