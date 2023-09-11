import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Jeanine Mason"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-02",
	airdate: "2020-04-06",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Jeanine Mason"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a late-night gas station",
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			styles: ["Latin rap"],
			about: "~~Jeanine~~ Sexy dermatologist",
		},
		{
			name: "Themed Restaurant",
			diners: ["Gary Anthony Williams", "Jeanine Mason"],
			waiters: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			scene: "A young couple having a meal in a restaurant",
			theme: "Old Testament",
		},
		{
			name: "Moving People",
			performers: ["Wayne Brady", "Colin Mochrie"],
			moversFromTheAudience: ["June", "Manny"],
			scene: "Global shortage of burritos",
		},
		{
			name: "Helping Hands",
			performers: [
				"Jeanine Mason",
				{
					body: "Colin Mochrie",
					hands: "Ryan Stiles",
				},
			],
			scene:
				"A flirtatious coffee-shop barista, Ryan, is training his new apprentice Jeanine in barista things",
		},
	],
};
