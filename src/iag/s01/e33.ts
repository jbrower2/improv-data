import { type Episode } from "../../types/episode";

export const e33: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Bob Derkach"
> = {
	number: 33,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_33",
	airdate: "2011-05-25",
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
			name: "Duet",
			singers: ["Jeff Davis", "Chip Esten"],
			about: "Jan, a tax professional",
			styles: ["Disco ballad"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Kathy Kinney", "Colin Mochrie"],
			moderators: ["Jeff Davis"],
			scene:
				"The strange life of a woman named Marnie who lives in New York but spends most of her time in North Carolina doing nothing",
			styles: [
				"Western",
				"At Ford's Theater",
				"Shakespeare",
				"In Mexico",
				"Three-",
				"Seventeen-word sentences in Mexico",
			],
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Squat",
					name: "Jeff Davis",
				},
				{
					startingPosition: "One leg, arm up",
					name: "Chip Esten",
				},
			],
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Drew Carey", "Brad Sherwood"],
			moderators: ["Chip Esten"],
			scene: "A doctor and a patient somewhere near a lake",
		},
	],
};
