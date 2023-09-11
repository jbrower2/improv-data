import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Katie Cassidy"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-16",
	airdate: "2016-08-31",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Katie Cassidy"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "The _Rocky_-style biopic of a cockfighting rooster",
				},
				{
					name: "Colin Mochrie",
					quirk: "German pickup artist who gets turned on by ugly things",
				},
				{
					name: "Ryan Stiles",
					quirk: "Hyperactive teething toddler",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Katie",
			styles: ["Mick Jagger"],
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit to help you get the perfect beach body",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Superheroes you wouldn't want to be rescued by",
				"Bad ways to impress your date",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Katie Cassidy",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Camping enthusiast Ryan has taken his lovely girlfriend Katie out on a romantic camping trip",
		},
	],
};
