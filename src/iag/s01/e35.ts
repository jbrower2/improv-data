import { type Episode } from "../../types/episode";

export const e35: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 35,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_35",
	airdate: "2011-05-27",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Kathy Kinney",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Two-Headed Expert",
			expert: ["Greg Proops", "Jeff Davis"],
			interviewer: ["Drew Carey", "Kathy Kinney"],
			scene: "In a laundromat",
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Jeff Davis"],
			about: "Deanna, who used to do computer programming",
			styles: ["80s R&B"],
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Sitting",
					name: "Chip Esten",
				},
				{
					startingPosition: "Crawling",
					name: "Jeff Davis",
				},
			],
		},
		{
			name: "Forward Rewind",
			alternateName: "Forward Reverse",
			performers: ["Chip Esten", "Drew Carey"],
			scene: "In the Revolutionary War",
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Jeff Davis", "Ryan Stiles"],
			scenes: ["The soap opera", "_Tales of Intrigue_"],
			lines: [
				"Was that a duck?",
				"I can't wait to open your account.",
				"You don't sweat much for a woman your size.",
				"Time for my Pap Smear.",
				"Where were you when the dog died?",
				"Hello there, gorgeous.",
				"For your prostate exam you can either lay down or bend over.",
			],
		},
	],
};
