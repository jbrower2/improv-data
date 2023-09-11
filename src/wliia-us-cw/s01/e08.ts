import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-08",
	airdate: "2013-08-20",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	games: [
		{
			name: "Questions with Wigs",
			scene: "At a family wedding",
		},
		{
			name: "Sideways Scene",
			performers: ["Colin Mochrie", "Keegan-Michael Key", "Wayne Brady"],
			scene:
				"Two prisoners working out in their cell while planning a breakout, and Wayne is a tough prison guard who bursts in, suspecting trouble",
			styles: "Horror movie, Bollywood film",
		},
		{
			name: "What's in the Bag?",
			performers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			bagDonors: ["Sally", "Melanie"],
			scene:
				"Two doctors who have arrived in a remote town where farmer's wife, Wayne, is giving birth",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"People you don't want to sit next to on a plane",
				"Inappropriate things to say at a funeral",
				"Flavors rejected by ice cream chains",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Keegan-Michael Key",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a Mexican chef who is teaching his eldest son Keegan how to prepare food at the family restaurant",
		},
	],
};
