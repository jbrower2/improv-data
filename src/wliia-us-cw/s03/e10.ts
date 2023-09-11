import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Penn & Teller"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-10",
	airdate: "2015-07-06",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Penn & Teller"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Gary Anthony Williams",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Character in a fighting video game being controlled by a useless first-time player",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"County fair judge who thinks parts of people's bodies are fruits and vegetables",
				},
				{
					name: "Ryan Stiles",
					quirk: "Owl looking for ugly things to build his nest with",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Penn & Teller",
			styles: ["Motown"],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Robin Hood and Little John",
			secret: "_Male Order_ magazine",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Outtakes from the Olympics",
				"Things that you might say at sea, that you wouldn't say about your partner",
				"Unlikely things to see or hear in _Star Wars_",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Penn & Teller",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"A cheesy nightclub magician desperately trying to sell Penn & Teller on some new tricks for their act",
		},
	],
};
