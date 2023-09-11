import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Brett Dier"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-17",
	airdate: "2016-09-07",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Brett Dier"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Party Quirks",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Loses control of his limbs every time he has a sexual thought",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Princess kissing everyone in the hope they turn into a prince",
				},
				{
					name: "Ryan Stiles",
					quirk: "Hugely embarrassing things keep happening to him",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Brett",
			styles: ["80s breakdance"],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Brett Dier",
			scene:
				"Evil scientist Ryan turns his assistant Brett into a hideous mutant, when suddenly Brett's girlfriend, Wayne, who has also been turned into a hideous mutant, staggers in",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Pickup lines in the retirement home",
				"What Colin Mochrie is thinking right now",
				"The world's stupidest record attempts",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Brett"],
			scene:
				"A married couple traveling across Canada using various modes of transport",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[The butcher](https://whoselineisitanyway.fandom.com/wiki/Butcher_Hoedown)",
		},
	],
};
