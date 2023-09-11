import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-09",
	airdate: "2002-11-29",
	productionNumber: "296735-515",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "There's a dead possum in his parking spot",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Stinky Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Giggling Nipple-Tweak Man",
				},
				{
					name: "Chip Esten",
					superpower: "Captain Luau",
				},
				{
					name: "Wayne Brady",
					superpower: "Temper Tantrum Kid",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Disturbing people to get a lap dance from",
				"Unfortunate times to sneeze",
				"Jobs where you shouldn't kid around",
				"The Munchkins: what are they doing now?",
			],
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit and Lie",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan is a woman giving birth, Colin is the nervous husband, and Wayne is the flirtatious midwife",
		},
		{
			name: "Party Quirks",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Various acts getting booed off the stage during amateur night at the Apollo",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Bomb squad member who received a tip that there are bombs in people's pants",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Series of ugly undersea creatures swimming up to investigate the cameras",
				},
			],
		},
		{
			name: "Show-Stopping Number",
			performers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Working in a factory",
			songs: [
				"Cheese Is Our Life",
				"I'm Tired of Poking Holes in These Things",
				"Without a Hole, Where Would You Be?",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is the volatile owner of an Italian deli showing his son Drew the tricks of the trade",
		},
	],
};
