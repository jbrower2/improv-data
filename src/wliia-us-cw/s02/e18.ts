import { type Episode } from "../../types/episode.js";

export const e18: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Padma Lakshmi"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-18",
	airdate: "2014-08-11",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Padma Lakshmi"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Flirty housewife Heather pulls up at a gas station where the hunky attendant, Ryan, starts working on her high-tech sports car when suddenly Heather's jealous and elderly husband Wayne speeds in on his mobility scooter",
			notes: [
				"Do it like you're demonically possessed by demons",
				"Do it like you panic too easily",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Padma",
			styles: ["Prince"],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Colin is Snow White and Ryan is one of the Seven Dwarves",
			secret: "Bottles of booze",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Heather Anne Campbell"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Padma Lakshmi",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Food expert Padma is in Paris visiting famous French chef Ryan who'll show her how to prepare some of his favorite desserts",
		},
	],
};
