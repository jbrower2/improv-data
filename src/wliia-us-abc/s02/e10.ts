import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-10",
	airdate: "1999-11-04",
	productionNumber: "296718-204",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "We're out of deodorant",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Armpit Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Fashion Photographer Kid",
				},
				{
					name: "Colin Mochrie",
					superpower: "Professor Panic",
				},
				{
					name: "Wayne Brady",
					superpower: "Captain Does the Splits at Every Moment He Can",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about:
				"Delores, a retired junior high school secretary who likes to garden",
			styles: ["Michael Jackson getting older"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Greg Proops"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Chinese nuclear test site",
		},
		{
			name: "Questionable Impressions",
			scene: "In a hospital",
		},
		{
			name: "Hats",
			alternateName: "Dating Service Video",
			topic: "World's worst dating service video",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			musical: "_My Favorite Shoe_",
			song: "You've Got Soul",
		},
	],
};
