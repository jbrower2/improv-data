import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-03",
	airdate: "2021-01-22",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "One night in a sketchy neighborhood",
		},
		{
			name: "World's Worst",
			scenes: ["Clips from the world's worst action movie"],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: [
				"The beast Colin is trying to persuade the beauty Ryan to live with him inside his castle",
			],
			lines: [
				"Squeal like a pig.",
				"Look at the ass on that.",
				"What's that smell?",
				"Boy am I glad I wore a bra today.",
			],
		},
		{
			name: "Party Quirks",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "A series of 'Sesame Street' characters getting wildly drunk",
				},
				{
					name: "Colin Mochrie",
					quirk: "Paul Revere shouting unpleasant things as he gallops past",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Desperate squirrel who can't remember where he's hidden his nuts",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Doctor](https://whoselineisitanyway.fandom.com/wiki/Doctor_Hoedown_(US_17-03))",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Horror_",
			songs: [
				{
					style: "Early jazz",
					title: "Let's separate",
				},
				{
					style: "Munchkins",
					title: "Don't Open That Door",
				},
			],
		},
	],
};
