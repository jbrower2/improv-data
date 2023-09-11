import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Drew Carey"
	| "Heather Anne Campbell"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_09",
	airdate: "2011-04-21",
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
			name: "Moving People",
			performers: ["Ryan Stiles", "Jonathan Mangum"],
			moversFromTheAudience: ["Julie", "Jim"],
			scene: "Lifetime in Tahiti",
		},
		{
			name: "Question This",
			host: "Chip Esten",
			contestants: [
				"Jonathan Mangum",
				"Heather Anne Campbell",
				"Drew Carey",
				"Ryan Stiles",
			],
			answers: [
				"Mozzarella",
				"Medulla oblongatta",
				"Keno",
				"Dreamsicle",
				"People",
				"Albania",
				"Quagmire",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Chip Esten", "Jeff Davis"],
			audienceMembers: ["Judy", "Misty"],
			scene: "Ranchers",
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Jeff Davis", "Heather Anne Campbell"],
			scenes: ["The soap opera", "_Can I Ask a Friend?_", "set in Jaime Falls"],
			lines: [
				"That is an odd smell.",
				"Are there spinsters with benefits?",
				"Branding and castration",
				"Your fly is open.",
				"Elk are running uphill in front of me.",
				"I saw Elvis walking down the street.",
				"I'm so drunk.",
				"I met a man from Nantucket.",
			],
		},
	],
};
