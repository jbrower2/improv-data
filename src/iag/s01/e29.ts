import { type Episode } from "../../types/episode.js";

export const e29: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 29,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_29",
	airdate: "2011-05-19",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Colin Mochrie",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Duet",
			singers: ["Jeff Davis", "Chip Esten"],
			about: "Diane, a mortgage broker",
			styles: ["Neil Diamond"],
		},
		{
			name: "Question This",
			host: "Greg Proops",
			contestants: ["Ryan Stiles", "Drew Carey", "Chip Esten", "Jeff Davis"],
			answers: [
				"Kumquat",
				"Ferrari",
				"Cucumbers",
				"Ubiquitous",
				"New Jersey",
				"Dice",
				"Silicone",
				"Hummus",
			],
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Hacky sack",
					name: "Greg Proops",
				},
				{
					startingPosition: "Macarena",
					name: "Jeff Davis",
				},
			],
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Drew Carey", "Jeff Davis"],
			scenes: ["The dungeon soap opera", "_Into the Depths_"],
			lines: [
				"Get in there!",
				"It's tee-shirt time!",
				"Follow the yellow brick road.",
				"Hello, angels, my name is Charlie.",
				"At night, I turn into a ravenous boa constrictor.",
				"Frankly, my dear, I don't give a damn.",
				"I just love Christopher Walken.",
				"There can be only one.",
				"Let's breakdance.",
				"Pass the soap, please.",
			],
		},
	],
};
