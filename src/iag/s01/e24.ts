import { type Episode } from "../../types/episode";

export const e24: Episode<
	| "Drew Carey"
	| "Heather Anne Campbell"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 24,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_24",
	airdate: "2011-05-12",
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
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Ryan Stiles", "Heather Anne Campbell"],
			moderators: ["Jonathan Mangum"],
			scene: "Mechanical drafting",
		},
		{
			name: "Duet",
			singers: ["Jeff Davis", "Chip Esten"],
			about: "Barbara, an ophthalmology receptionist",
			styles: ["Soul ballad"],
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "On his knees",
					name: "Jeff Davis",
				},
				{
					startingPosition: "Downward-Facing Dog",
					name: "Jonathan Mangum",
				},
			],
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Drew Carey", "Ryan Stiles"],
			scenes: ["Librarian"],
			lines: [
				"It itches so bad.",
				"Where is my White Russian?",
				"You've got something in your teeth.",
				"I have hemorrhoids.",
				"I am ready to dance.",
				"Is that a pickle in your pocket, or are you just happy to see me?",
				"Where's my fart pants?",
				"Steal candy from a baby's mouth.",
				"The moment I met you I knew you were the one.",
				"So how old did you say you are?",
			],
		},
	],
};
