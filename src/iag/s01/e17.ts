import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Drew Carey"
	| "Heather Anne Campbell"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_17",
	airdate: "2011-05-03",
	host: "Drew Carey",
	performers: [
		"Heather Anne Campbell",
		"Jeff Davis",
		"Chip Esten",
		"Jonathan Mangum",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Duet",
			singers: ["Jonathan Mangum", "Jeff Davis"],
			about: "Jeannie, who is retired and horny",
			styles: ["Bossa nova"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Heather Anne Campbell", "Jeff Davis"],
			audienceMembers: ["Dylan", "Ken"],
			scene: "Moose hunting",
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Ryan Stiles", "Drew Carey"],
			scenes: ["The fishing soap opera", "_As the Worm Flies_"],
			lines: [
				"Let's run away together.",
				"I love Mickey Mouse.",
				"I think you're my future ex-wife.",
				"Man, that thing is huge.",
				"Did you remember the tickets?",
				"Where's the toilet?",
				"How would you like to create a new version of Frankenstein with me?",
			],
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Drew Carey", "Chip Esten"],
			moderators: ["Ryan Stiles"],
			scene: "At the Lazy Bend Ranch",
		},
	],
};
