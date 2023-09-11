import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-13",
	airdate: "2005-02-28",
	productionNumber: "296744-7013",
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
				"Hunky plumber Ryan has finished up installing a new shower when frisky housewife Kathy insists on testing it with him, Kathy's outraged mother Wayne makes a dramatic entrance and catches them at it",
			notes: [
				"Do it like fast-talkin' gangsters from a 40s film noir",
				"Do it like you have giant butts",
				"Do it like it's a violent, slow-motion shootout",
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: "Laura and Linda",
			to: "Jillian from the audience",
			song: "I Can't Stop Thinking About Your Pants",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"What the Queen of England is really saying to the people in the greeting line",
				"What Lassie was really trying to tell everyone",
				"People you wouldn't want to go on an intergalactic flight with",
				"If adults settled disputes the way kids do",
				"If songs were written about life's most embarrassing moments",
			],
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
				"Kathy has gone to visit her Austrian pen pal Ryan and he wants to impress her by taking her out on a romantic Alpine picnic",
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Colin Mochrie"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
