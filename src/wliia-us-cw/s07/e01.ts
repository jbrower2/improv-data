import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Chris Hardwick"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-01",
	airdate: "2019-06-17",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Chris Hardwick"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a reunion",
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Wayne Brady"],
			moversFromTheAudience: ["Kayla", "Joyce"],
			scene: "The planet is being affected by a shortage of water",
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady", "Chris Hardwick"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "~~Chris~~ Magical mystical substitute teacher",
			styles: ["Fantasy metal"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely lines from romance novels",
				"The world's worst mating calls",
				"Things you shouldn't do to try and impress your date",
				"Things guaranteed to kill the mood in the bedroom",
				"Bad people to be marooned on a desert island with",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Chris Hardwick",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Female college student Ryan has prepared a meal for the first time to try and impress her date, the captain of the football team, Chris",
		},
	],
};
