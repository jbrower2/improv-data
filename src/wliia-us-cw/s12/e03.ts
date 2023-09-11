import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Penn & Teller"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-03",
	airdate: "2023-04-14",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Penn & Teller"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Flirtatious golf pro Ryan is showing a beautiful young trophy wife Gary how to improve her swing.  Suddenly, Gary's near-sighted husband, Wayne, arrives on a golf cart",
			notes: [
				"Do it like you're hyped up on caffeine",
				"Do it like you're all covered in superglue",
				"Do it like you're in a cheesy adult movie",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely car commercials",
				"Pick-up lines that would never work",
				"Bad things to do on your first day at work",
				"If famous movie scenes were performed in the nude",
			],
		},
		{
			name: "Radio Show",
			radioDjs: ["Wayne Brady", "Gary Anthony Williams"],
			callers: ["Ryan Stiles", "Colin Mochrie"],
			specialGuests: "Penn & Teller",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Dallas_",
			songs: [
				{
					style: "Luther Vandross and Chris Rock",
					title: "Why Do We Have Hockey Here?",
				},
				{
					style: "Ice-T and Mr. T",
					title: "Barbecue in the City",
				},
			],
		},
	],
};
