import { type Episode } from "../../types/episode";

export const e23: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 23,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-23",
	airdate: "2001-03-22",
	productionNumber: "296722-333",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Dr. Ruth",
				},
				{
					name: "Colin Mochrie",
					quirk: "Egyptian mummy coming to life and looking for love",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Temperamental choreographer desperate to get his chorus line in shape",
				},
			],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "At the supermarket",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Alexis, an ice skating coach",
			styles: ["Michael", "Janet Jackson"],
		},
		{
			name: "The Millionaire Show",
			host: {
				name: "Greg Proops",
				alternateName: "Delbert",
			},
			contestant: "Ryan Stiles",
			audienceMember: "Wayne Brady",
			friendOnThePhone: {
				name: "Colin Mochrie",
				alternateName: "Pittybow",
			},
			theme: "Hillbilly",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Skydiving](https://whoselineisitanyway.fandom.com/wiki/Skydiving_Hoedown)",
		},
	],
};
