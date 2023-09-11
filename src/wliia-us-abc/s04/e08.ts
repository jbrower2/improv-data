import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-08",
	airdate: "2001-10-04",
	productionNumber: "296734-414",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Kathy is an impatient customer who pulls into Ryan's gas station where he is pumping gas, Wayne is a thief who has come to rob them",
			notes: [
				"Do it like insult comics",
				"You're Tarzan (Ryan), Jane (Kathy), Cheeta (Wayne)",
				"Do it like _Jerry Springer_ guests, you're still Tarzan, you're still Jane, you're still Cheeta",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Kathy"],
			scene: "Getting up and going through their morning routine",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: "Laura and Linda",
			to: "Katie from the audience",
			song: "You've Got a Beautiful Earlobe",
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
				"Ryan and Kathy are two young Italian lovers, Ryan has invited Kathy over for a romantic meal so he can propose to her",
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
