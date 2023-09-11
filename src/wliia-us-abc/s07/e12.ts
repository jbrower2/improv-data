import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-12",
	airdate: "2005-02-21",
	productionNumber: "296744-7012",
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
			name: "Let's Make a Date",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Hyenas from _The Lion King_",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Touchy French-Canadian teen who gets increasingly aggressive at people who laugh at him",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Smooth, upbeat lounge singer on a cruise liner just before disaster strikes",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Michelle", "Julie"],
			scene:
				"Ryan is Indiana Jones, Colin is his sassy female sidekick, they are on a dangerous quest for lost treasure",
		},
		{
			name: "Motown Group",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			song: "Do the Park Ranger",
		},
		{
			name: "Helping Hands",
			performers: [
				"Kathy Greenwood",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Married man Ryan has invited his secretary out for lunch so he can proposition her",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Kathy Greenwood", "Drew Carey"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Italian"],
			film: "_Killer Spaghetti_",
		},
	],
};
