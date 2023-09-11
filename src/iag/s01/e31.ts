import { type Episode } from "../../types/episode.js";

export const e31: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Bob Derkach"
> = {
	number: 31,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_31",
	airdate: "2011-05-23",
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
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Jeff Davis"],
			salesmen: ["Colin Mochrie", "Chip Esten"],
			musicians: ["Bob Derkach"],
			album: "_Songs of the Lawyer_",
			songs: [
				{
					style: "Reggae",
					title: "Objection Overruled",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Brad Sherwood"],
			audienceMembers: ["Diane", "Zack"],
			scene: "A lumberjack",
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Drew Carey", "Kathy Kinney"],
			scenes: ["The soap opera", "_Slept with My Boss_"],
			lines: [
				"How do you make a woman happy?",
				"What the Hell are you?",
				"If I had more confidence I don't think I would have gotten this penile implant.",
				"Is that a banana in you pocket?",
				"What the Hell is up with these leafs?",
				"I smell cheese.",
				"The price is wrong.",
			],
		},
		{
			name: "Two-Headed Expert",
			expert: ["Kathy Kinney", "Chip Esten"],
			interviewer: ["Jeff Davis", "Drew Carey"],
			scene: "In a science class",
		},
	],
};
