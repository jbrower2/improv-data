import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Darren Criss"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-03",
	airdate: "2022-10-28",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Greg Proops"],
	guests: ["Darren Criss"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			alternateName: "Scenes From a Hat",
			scenes: [
				"Unhelpful things to say in a crisis",
				"Unlikely things for your proctologist to do or say",
				'Inappropriate jobs for "Bring Your Child to Work Day"',
				"Unappetizing flavors of potato chips",
				"Inappropiate things to say at a christening",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Darren",
			styles: ["Motown"],
		},
		{
			name: "Award Show",
			presenters: ["Greg Proops", "Jeff Davis"],
			winners: ["Wayne Brady", "Colin Mochrie"],
			for: "Annoying neighbors",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about: "Food",
		},
		{
			name: "Three-Headed Broadway Star",
			alternateName: "Three-Headed Singer",
			singers: ["Wayne Brady", "Colin Mochrie", "Darren Criss"],
			musicians: "Laura and Linda",
			song: "I Can't Live Without Your Bubbles",
		},
	],
};
