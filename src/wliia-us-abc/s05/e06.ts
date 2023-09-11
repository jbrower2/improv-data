import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-06",
	airdate: "2002-10-21",
	productionNumber: "296734-433",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Questions Only",
			scenes: [
				"In an alternative version of _The Wizard of Oz_",
				"Dorothy arrives in Munchkinland where things have taken a turn for the worse",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Kathy Greenwood"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Bodybuilding contest",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Naomi, who works for UPS",
			styles: ["70s disco"],
		},
		{
			name: "Infomercial",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			problem: "Nail-biting",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If lessons in love and sex were taught in the style of _Sesame Street_",
				"_Jeopardy!_ questions where the _Whose Line?_ cast members are the answers",
				"Bad things to say as you're about to kiss her",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Police officer](https://whoselineisitanyway.fandom.com/wiki/Police_Officer_Hoedown)",
		},
	],
};
