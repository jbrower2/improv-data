import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-12",
	airdate: "2000-11-30",
	productionNumber: "296722-309",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Superheroes",
			crisis: "There's no paper",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Staple Gun Kid",
				},
				{
					name: "Ryan Stiles",
					superpower: "Malfunctioning Robot with an Attitude Boy",
				},
				{
					name: "Chip Esten",
					superpower: "The Richard Simmons Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "The _South Park_ Kid",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Laina, a camp counselor",
			styles: ["The Munchkins"],
		},
		{
			name: "Good Cop Bad Cop",
			performers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			scene:
				"Wayne has called Ryan and Colin over to his house to repair the dishwasher",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Kimberly", "Ashley"],
			scene:
				"Ryan is Noah and Colin is Mrs. Noah, they get the message to build and load the ark just before the big storm hits",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Drew Carey](https://whoselineisitanyway.fandom.com/wiki/Drew_Carey_Irish_Drinking_Song_(3-12))",
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Chip Esten"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
