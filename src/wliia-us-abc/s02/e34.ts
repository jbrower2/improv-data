import { type Episode } from "../../types/episode.js";

export const e34: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 34,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-34",
	airdate: "2000-04-27",
	productionNumber: "296718-218",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Dracula with an insatiable appetite",
				},
				{
					name: "Colin Mochrie",
					quirk: "Desperate middle-aged housewife looking to spice up her life",
				},
				{
					name: "Ryan Stiles",
					quirk: "Having a big fight with his boyfriend backstage",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Brad Sherwood", "Colin Mochrie"],
			fieldReporter: "Ryan Stiles",
			onTheGreenScreen: "Elephant seals",
		},
		{
			name: "Title Sequence",
			singers: ["Brad Sherwood", "Wayne Brady"],
			actors: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			sitcom: "_Hillary and Monica_",
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Ugly hunchback Quasimodo",
				"played by Ryan",
				"has just rescued",
				"taken to his bell tower the beautiful French gypsy girl Esmerelda",
				"played by Colin",
				"as an angry mob forms outside",
			],
			lines: [
				"I had no idea you were inflatable.",
				"Sorry, that's the beer talking.",
				"Let's get jiggy with it!",
				"Drew Carey makes me hot.",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"The secret double lives of _Whose Line_ cast members",
				"Posts you'll never see on a church bulletin board",
				"Hobbies of the stupid",
				"America's least popular monuments",
				"Strange chants overheard while jumping rope",
				"What models say to each other as they pass on the runway",
				"Documentary subjects you'll never see",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Probation officer](https://whoselineisitanyway.fandom.com/wiki/Probation_Officer_Hoedown)",
		},
	],
};
