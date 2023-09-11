import { type Episode } from "../../types/episode";

export const e36: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Bob Derkach"
> = {
	number: 36,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_36",
	airdate: "2011-05-30",
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
			singers: ["Jeff Davis", "Brad Sherwood"],
			about: "Mary, who does customer service",
			styles: ["R&B ballad"],
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Drew Carey", "Kathy Kinney"],
			scene: "Something to do with construction",
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Tippy toes headstand",
					name: "Chip Esten",
				},
				{
					startingPosition: "Stretching",
					name: "Brad Sherwood",
				},
			],
		},
		{
			name: "Two-Headed Expert",
			expert: ["Jeff Davis", "Drew Carey"],
			interviewer: ["Brad Sherwood", "Colin Mochrie"],
			scene: "Kangaroos",
		},
	],
};
