import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-04",
	airdate: "2001-09-20",
	productionNumber: "296734-420",
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
			name: "Questions Only",
			scenes: ["Romance breaks out at a luxurious European health spa"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Lisa", "Ruth"],
			scene:
				"Two American GIs attempting the great escape from a WWII German prisoner-of-war camp",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Compliments you give your prom date that will definitely get your face slapped",
				"Inappropriate comments from the priest at your wedding",
				"People who shouldn't work naked",
				"Original rejected poses for the _Mona Lisa_",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of James Bond, International Spy_",
			songs: [
				{
					style: "Hawaiian",
					title: "How Does an Old Guy Like Me Get Such Young Chicks?",
				},
				{
					style: "Blues",
					title: "My Shoe Is a Gun",
				},
				{
					style: "Ethel Merman",
					title: "Blofeld on My Mind",
				},
			],
		},
		{
			name: "Irish Drinking Song",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Got arrested](https://whoselineisitanyway.fandom.com/wiki/Got_Arrested_Irish_Drinking_Song)",
		},
	],
};
