import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Willie Robertson"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-06",
	airdate: "2015-05-29",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Willie Robertson"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "In a police station on a busy night",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Willie",
			styles: ["Neil Diamond", "Mick Jagger"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Jeff Davis"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen:
				'Deformed "monster" named Belial from _Basket Case_ (1982)',
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you don't want to hear from your waiter",
				"How to ruin a romantic moment with your partner",
				"If rappers sang about their embarrassing problems",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Willie Robertson",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Good old boy Ryan is teaching his buddy Willie how to hunt ducks",
		},
	],
};
