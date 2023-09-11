import { type Episode } from "../../types/episode";

export const e33: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 33,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-33",
	airdate: "2003-09-05",
	productionNumber: "296736-605",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "The Barry White of the rooster world surrounded by lady hens",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Gawky teenager who meets an audience member & takes her on a date to the movies where he hopes to score",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Colin's highly competitive uglier brother desperate to show that anything Colin does, he can do better",
				},
			],
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Fashion Models",
			commentators: ["Greg Proops"],
			models: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			job: "Professional football player",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If your thoughts were amplified on loudspeakers",
				"Things you can say about your boat, but not your girlfriend",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Greg Proops"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "A striptease by a police officer",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Rock star](https://whoselineisitanyway.fandom.com/wiki/Rock_Star_Hoedown_(US_5-33))",
		},
	],
};
