import { type Episode } from "../../types/episode";

export const e37: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 37,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-37",
	airdate: "2001-05-18",
	productionNumber: "296734-410",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Number of Words",
			scene:
				"Ryan is Luke Skywalker battling Greg, who's Darth Vader, when space adventurer Lando Calr...Wayne comes in to help, Colin keeps entering as other _Star Wars_ characters (Chewbacca, C-3PO, and Leia)",
			performers: [
				{
					name: "Greg Proops",
					words: 2,
				},
				{
					name: "Colin Mochrie",
					words: 3,
				},
				{
					name: "Ryan Stiles",
					words: 4,
				},
				{
					name: "Wayne Brady",
					words: 5,
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about:
				"Howard, an engineer that designs closures for hazardous waste sites",
			styles: ["Village People"],
		},
		{
			name: "Show-Stopping Number",
			performers: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Working at an accounting firm",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about the food you eat, but not about your girlfriend",
				"What President Bush does in the Oval Office when he's all by himself",
				"A brief glimpse into the dreams of Colin Mochrie",
				"Statements that will get bleeped by the censor",
				"Outtakes from the first one hundred episodes of _Whose Line_",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[The 100th show](https://whoselineisitanyway.fandom.com/wiki/100th_Show_Hoedown)",
		},
	],
};
