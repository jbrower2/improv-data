import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Loyola Marymount University cheerleaders"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-06",
	airdate: "2004-08-07",
	productionNumber: "296735-505",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Loyola Marymount University cheerleaders"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			topic:
				"The queen of England announcing she's having an affair with Ryan Stiles",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Andrea", "Neely"],
			scene:
				"Ryan is a gallant knight trying to reach Rapunzel, Colin, in the tallest tower of the witch's castle, he must free her and escape past the witch, the sleeping dragon, and other dangers so they can be wed",
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Loyola Marymount University cheerleaders",
			styles: ["R&B"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["LMU cheerleaders Jennifer", "Pamela", "Lyann"],
			scene:
				"Two cowboys out on the range tend to their cattle and set up camp for the night",
		},
		{
			name: "Irish Drinking Song",
			performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Passed wind](https://whoselineisitanyway.fandom.com/wiki/Passed_Wind_Irish_Drinking_Song)",
		},
	],
};
