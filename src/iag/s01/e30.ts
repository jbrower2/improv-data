import { type Episode } from "../../types/episode.js";

export const e30: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 30,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_30",
	airdate: "2011-05-20",
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
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Jeff Davis", "Ryan Stiles"],
			scenes: ["The soap opera", "_Airports_"],
			lines: [
				"Once you pop, you can't stop.",
				"I love sex butt.",
				"Is it always your octopus?",
				"I love you sweetie.  Are you coming home now?",
				"I love to eat crab legs in the buffet.",
				"Those aren't pillows.",
				"Mommy loves her baby.",
				"What we have here is a failure to communicate.",
				"I forgot to manscape.  You might not wanna look down there.",
				"And he spiked me.  Give me a chicken salad sandwich.",
			],
		},
		{
			name: "First Date",
			mainCouple: ["Kathy Kinney", "Brad Sherwood"],
			extraPerformers: ["Ryan Stiles"],
			coupleFromTheAudience: ["Callie", "John"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Drew Carey"],
			audienceMembers: ["John", "Barbara"],
			scene: "Zookeeper",
		},
		{
			name: "Greatest Hits",
			singers: ["Chip Esten", "Jeff Davis"],
			salesmen: ["Ryan Stiles", "Drew Carey"],
			musicians: ["Bob Derkach"],
			album: "_Songs of the Gold Miner_",
			songs: [
				{
					style: "Motown",
					title: "I Chip, You Dig",
				},
			],
		},
	],
};
