import { type Episode } from "../../types/episode";

export const e27: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 27,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-27",
	airdate: "2002-02-12",
	productionNumber: "296734-432",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Puritan witch hunter who sees the devil's work everywhere",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Pompous politician at a press conference who starts a terrible fight with his fiancee in the audience",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"The head of Colin's angry ex-wife sprouting from Colin's neck",
				},
			],
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene: "Hotel employees working the night shift",
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Susie, who sells drywall",
			styles: ["The Rolling Stones"],
		},
		{
			name: "Title Sequence",
			singers: ["Wayne Brady", "Brad Sherwood"],
			actors: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			sitcom: "_Bill Cosby and the Insurance Salesman_",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"How the cast of _Baywatch_ would react to an actual emergency",
				"If Tarzan and Tonto were roommates",
				"If you could give the youth of America just one piece of advice, it would be",
				"Strange sweet nothings whispered in your lover's ear",
				"Unlikely souvenir t-shirts",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Director](https://whoselineisitanyway.fandom.com/wiki/Director_Hoedown)",
		},
	],
};
