import { type Episode } from "../../types/episode.js";

export const e19: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Carson Kressley"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-19",
	airdate: "2015-09-28",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Carson Kressley"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "One day at the gym",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Heather Anne Campbell"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Carson Kressley",
			scene:
				"Outrageous fashion designer Ryan is teaching model Carson how to show off his latest collection on the catwalk when suddenly, Carson's bitchy rival Wayne enters to show that he's got the better moves",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Times when a slap on the butt is inappropriate",
				"Unlikely things to see in a fitness DVD",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Heather", "Carson"],
			scene:
				"Two newlyweds in a department store during a sale, buying all of the furniture and fittings for their new home",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Harriet, who died tragically in a softball-related accident",
		},
	],
};
