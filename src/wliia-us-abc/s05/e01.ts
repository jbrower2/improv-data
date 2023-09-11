import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Whoopi Goldberg"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-01",
	airdate: "2002-09-09",
	productionNumber: "296735-511",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Whoopi Goldberg",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions Only",
			scenes: ["It's the last night on an international singles cruise"],
		},
		{
			name: "Two-Line Vocabulary",
			scene:
				"Colin is the leader of the last few members of a space colony on Mars, they are under attack from enemy aliens and desperately trying to work out a plan",
			lines: [
				{
					name: "Ryan Stiles",
					lines: ["What is that?", "I'm really in the mood."],
				},
				{
					name: "Whoopi Goldberg",
					lines: ["Have you thought this through?", "That's impossible."],
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Wayne Brady", "Whoopi Goldberg"],
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Whoopi"],
			scene:
				"Ryan is trying to impress his girlfriend Colin at the carnival as they try out the rides and play the games",
		},
		{
			name: "Helping Hands",
			performers: [
				"Whoopi Goldberg",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a cold-blooded pirate captain who is showing new recruit Whoopi how to be a pirate",
		},
		{
			name: "Three-Headed Broadway Star",
			alternateName: "Three-Headed Broadway",
			singers: ["Wayne Brady", "Ryan Stiles", "Whoopi Goldberg"],
			musicians: "Laura and Linda",
			to: "Drew",
			song: "When I Think About Your Pants",
		},
	],
};
