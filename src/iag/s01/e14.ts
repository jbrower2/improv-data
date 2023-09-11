import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_14",
	airdate: "2011-04-28",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Kathy Kinney",
		"Colin Mochrie",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Tag",
			alternateName: "Freeze",
			startingPositions: [
				{
					startingPosition: "Tennis pro",
					name: "Colin Mochrie",
				},
				{
					startingPosition: "Supermodel",
					name: "Brad Sherwood",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Chip Esten"],
			about: "Wendy, a nurse",
			styles: ["Broadway"],
		},
		{
			name: "Show-Stopping Number",
			alternateName: "Bob's Call",
			performers: ["Jeff Davis", "Kathy Kinney"],
			scene: "Skydiving",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moderators: ["Brad Sherwood"],
			scene: "A cyclops",
		},
	],
};
