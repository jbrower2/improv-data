import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-01",
	airdate: "2001-09-06",
	productionNumber: "296734-401",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Remote Control",
			topic: "Chicken",
			performers: [
				{
					name: "Wayne Brady",
					quirk: "_South Park_",
				},
				{
					name: "Jeff Davis",
					quirk: "TV evangelist",
				},
				{
					name: "Colin Mochrie",
					quirk: "Game Show Network",
				},
				{
					name: "Ryan Stiles",
					quirk: "_The Jerry Springer Show_",
				},
			],
		},
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Novelty singing bass fish",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Temperamental actor having to do take after take of his big kissing scene with Wayne & Ryan",
				},
				{
					name: "Ryan Stiles",
					quirk:
						'Assortment of prisoners in a crowded jail cell "welcoming" new arrival Colin',
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Michelle", "Charlene"],
			scene:
				"Ryan is a husband and Colin is his heavily-pregnant wife at an amusement park when Colin suddenly goes into labor and has to get to the hospital",
		},
		{
			name: "Doo-wop",
			singers: ["Jeff Davis", "Wayne Brady", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Peggy, who died tragically in a freak taxidermy accident",
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Colin Mochrie"],
				["Ryan Stiles", "Drew Carey"],
			],
		},
	],
};
