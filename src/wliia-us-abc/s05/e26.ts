import { type Episode } from "../../types/episode.js";

export const e26: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 26,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-26",
	airdate: "2003-07-25",
	productionNumber: "296735-516",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Excited teenage girl who decides she can't play the game without bringing her best friends on stage to do it with her",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Office nerd who just got his C.P.R. certificate & wants to practice his resuscitation skills on everyone",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Witch who entices the beast to her magic sleeping stool then must find his true love to break the spell & turn him into a prince",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Jeff Davis", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Skateboarding wipe-outs",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad topics to open a conversation with",
				"Professions where breaking into song is discouraged",
				"Things that make the audience boo",
				"Mundane activities that might be improved with nudity",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Norway_",
			songs: [
				{
					style: "Honky-tonk",
					title: "Warm Warm Sauna, Cold Cold Water",
				},
				{
					style: "Opera",
					title: "When the Hell's It Gonna Get Dark?",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Cheating on your wife](https://whoselineisitanyway.fandom.com/wiki/Cheating_Hoedown)",
		},
	],
};
