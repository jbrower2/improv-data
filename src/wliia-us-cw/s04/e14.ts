import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Rachel Bloom"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-14",
	airdate: "2016-08-10",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Rachel Bloom"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene:
				"Ryan and Jeff are a honeymooning couple camping in Jurassic Park, when suddenly a Park Ranger, Wayne, runs in being chased by stampeding dinosaurs also played by Wayne",
			notes: [
				"Do it like Jimmy Stewart (Ryan), Keanu Reeves (Jeff), Munchkin (Wayne)",
				"Do it like a rock opera",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad recruitment commercials for the armed forces",
				"Pickup lines in space",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Rachel",
			styles: ["R&B"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Rachel Bloom",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"A couple on the verge of splitting up having a make-or-break meal at a romantic restaurant",
		},
	],
};
