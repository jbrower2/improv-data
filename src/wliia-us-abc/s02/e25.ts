import { type Episode } from "../../types/episode";

export const e25: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 25,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-25",
	airdate: "2000-02-24",
	productionNumber: "296718-229",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Superheroes",
			crisis: "Too hot",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Chocolate Bunny Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Mimics Everyone Behind Their Back Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Lounge Act",
				},
				{
					name: "Wayne Brady",
					superpower: "Can't Control His Legs Man",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A teenage boy goes on his first prom date",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Lydia, a geographer",
			styles: ["MC Hammer"],
		},
		{
			name: "The Millionaire Show",
			host: "Greg Proops",
			contestant: "Ryan Stiles",
			friendOnThePhone: "Colin Mochrie",
			audienceMember: "Wayne Brady",
			theme: "German",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[You're ugly](https://whoselineisitanyway.fandom.com/wiki/You%27re_Ugly_Hoedown)",
		},
	],
};
