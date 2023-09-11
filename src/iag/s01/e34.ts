import { type Episode } from "../../types/episode.js";

export const e34: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Bob Derkach"
> = {
	number: 34,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_34",
	airdate: "2011-05-26",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Kathy Kinney",
		"Colin Mochrie",
		"Brad Sherwood",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Song Styles",
			singers: ["Chip Esten", "Jeff Davis", "Brad Sherwood"],
			about: "Kristi, a mom of quadruplets",
			styles: ["Doo-wop"],
		},
		{
			name: "First Date",
			mainCouple: ["Kathy Kinney", "Drew Carey"],
			extraPerformers: [
				"Colin Mochrie",
				"Chip Esten",
				"Brad Sherwood",
				"Jeff Davis",
			],
			coupleFromTheAudience: ["Matt", "Sharon"],
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Something that would make us think of baseball",
					name: "Brad Sherwood",
				},
				{
					startingPosition: 'The letter "C"',
					name: "Chip Esten",
				},
			],
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Colin Mochrie", "Kathy Kinney"],
			moderators: ["Jeff Davis"],
			scene: "Beauticians",
		},
	],
};
