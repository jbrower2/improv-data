import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kaitlin Doubleday"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-05",
	airdate: "2016-06-20",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Kaitlin Doubleday"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Increasingly desperate marionette puppet pickup artist looking for action",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"A stressful day in the life of Bruce Banner, The Incredible Hulk",
				},
				{
					name: "Ryan Stiles",
					quirk: "Colin's new bride trying to hide the fact she's a dog",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kaitlin",
			styles: ["Hip Hop"],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Kaitlin Doubleday",
			scene:
				"Evil sorcerer Ryan has captured beautiful princess Kaitlin and is casting spells to turn her into different hideous creatures when Prince Wayne gallops in to save the day",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If famous TV shows were performed by drill sergeants",
				"The dating videos of _Star Wars_ characters",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Kaitlin Doubleday",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Boss Ryan has called Kaitlin in for a meeting at an Asian restaurant to discuss her possible promotion",
		},
	],
};
