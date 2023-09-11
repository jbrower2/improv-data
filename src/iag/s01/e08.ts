import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_08",
	airdate: "2011-04-20",
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
			name: "Duet",
			singers: ["Jonathan Mangum", "Jeff Davis"],
			about: "Pam, a lawyer",
			styles: ["60s soul"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Greg Proops", "Chip Esten"],
			moderators: ["Jeff Davis"],
			scene: "Christmas department store displays",
			styles: [
				"Happy",
				"Woody Allen film",
				"Haiku",
				"Balzac",
				"Oscar Wilde",
				"Woody Allen - Oscar Wilde",
				"Train",
				"Jack Nicholson",
				"Mel Gibson",
				"_Cujo_",
			],
		},
		{
			name: "Forward Rewind",
			alternateName: "Forward and Reverse",
			performers: ["Drew Carey", "Jeff Davis", "Jonathan Mangum", "Chip Esten"],
			moderators: ["Ryan Stiles"],
			scene: "Butterfly cards",
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Greg Proops", "Jonathan Mangum"],
			scenes: ["The soap opera", "_As the Jack Flaps_"],
			lines: [
				"Man's first massage with beautiful female",
				"I have been waiting for you all my life.",
				'_["something racist that I won\'t repeat onstage"]_',
				"Why are there mullets around?",
				"So why did you divorce her anyway?",
				"So this Jew walks into a bar.",
			],
		},
	],
};
