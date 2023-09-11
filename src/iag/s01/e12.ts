import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_12",
	airdate: "2011-04-26",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Jonathan Mangum",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Tag",
			alternateName: "Freeze",
			startingPositions: [
				{
					startingPosition: "On hands and knees",
					name: "Jonathan Mangum",
				},
				{
					startingPosition: "Fetal",
					name: "Jeff Davis",
				},
			],
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Jonathan Mangum", "Ryan Stiles"],
			scenes: ["The Ice Age"],
			lines: [
				"You remind me of...",
				"Man, I feel like a woman.",
				"Have you gained weight?",
				"I can't believe my man is cougar material.",
				"Purple monkeys in the tree",
				"I can't believe you are really boy Yentl.",
				"Would you like to watch the Jets lose tomorrow?",
			],
		},
		{
			name: "First Date",
			mainCouple: ["Jeff Davis", "Jonathan Mangum"],
			extraPerformers: [
				"Greg Proops",
				"Drew Carey",
				"Ryan Stiles",
				"Chip Esten",
			],
			coupleFromTheAudience: ["Matt", "Gerry"],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Jeff Davis"],
			about: "Sandy, a real estate manager",
			styles: ["Country swing"],
		},
	],
};
