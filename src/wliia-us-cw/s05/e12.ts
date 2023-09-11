import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Wanya Morris"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-12",
	airdate: "2017-09-07",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Wanya Morris"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Jonathan are high-tech thieves breaking into a mansion, suddenly they're confronted by crazy billionaire Wayne and his pet tiger Lil Wayne",
			notes: [
				"Do it like a daytime talk show movie",
				"Do it like you're horny as Hell",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Wanya",
			styles: ["90s R&B"],
		},
		{
			name: "Themed Restaurant",
			diners: ["Jonathan Mangum", "Wanya Morris"],
			waiters: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			scene: "Two businessmen having a meeting over dinner",
			theme: "Baseball",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"World's least sexy adult movies",
				"Things you can say about the weather, that you can't say about your partner",
				"If kids' television shows were about embarrassing personal problems",
				"Facts you wish were true",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Wanya Morris",
				{
					body: "Colin Mochrie",
					hands: "Ryan Stiles",
				},
			],
			scene:
				"Ryan has invited his soon-to-be-wed buddy Wanya over for a bachelor party at his house",
		},
	],
};
