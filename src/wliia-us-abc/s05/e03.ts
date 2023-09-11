import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-03",
	airdate: "2002-09-23",
	productionNumber: "296734-406",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Award Show",
			presenters: ["Brad Sherwood", "Wayne Brady"],
			winners: ["Colin Mochrie", "Ryan Stiles"],
			for: "Frat boys",
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"The _I've Got a Secret_ episode of the South American _Jerry Springer Show_",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Performing seal in a marine park pool playing up to the cameras",
				},
				{
					name: "Ryan Stiles",
					quirk: "Series of hunting accidents caught on tape",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"What life would have been like if your parents were insult comics",
				"What's on TV in Hell",
				"Things found written in hillbilly fortune cookies",
				"Hit numbers from a musical about breasts",
			],
		},
		{
			name: "Bartender",
			bartender: "Brad Sherwood",
			musicians: ["Laura Hall", "Linda Taylor"],
			performers: [
				{
					name: "Wayne Brady",
					quirk: "Excited about Brad",
				},
				{
					name: "Colin Mochrie",
					quirk: "Angry about a speeding ticket",
				},
				{
					name: "Ryan Stiles",
					quirk: "In love with ugly shoes",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Drew Carey", "Ryan Stiles"],
				["Brad Sherwood", "Wayne Brady"],
			],
		},
	],
};
