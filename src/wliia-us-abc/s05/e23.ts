import { type Episode } from "../../types/episode";

export const e23: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 23,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-23",
	airdate: "2003-07-18",
	productionNumber: "296735-519",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Number of Words",
			scene:
				"The deleted scene from _The Wizard of Oz_: Kathy is Dorothy and she has just arrived in Munchkinland where she's met by Wayne, who's a munchkin, and Colin, who's Glinda the Good Witch, Ryan is the Wicked Witch of the West",
			performers: [
				{
					name: "Kathy Greenwood",
					words: 3,
				},
				{
					name: "Wayne Brady",
					words: 5,
				},
				{
					name: "Colin Mochrie",
					words: 2,
				},
				{
					name: "Ryan Stiles",
					words: 4,
				},
			],
		},
		{
			name: "Infomercial",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			problem: "Hairy chests",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about:
				"Carly, who works in the bankruptcy department of a mortgage company",
			styles: ["Prince"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Times when you don't want the spotlight on you",
				"Unlikely famous movie scenes to be done nude",
				"The wrong thing to say when your girlfriend is trying on clothes",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Kathy Greenwood"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Lizards",
		},
		{
			name: "World's Worst",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Thing to say or do during or after making love"],
		},
	],
};
