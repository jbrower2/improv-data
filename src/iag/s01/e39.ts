import { type Episode } from "../../types/episode.js";

export const e39: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Bob Derkach"
> = {
	number: 39,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_39",
	airdate: "2011-06-02",
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
			singers: ["Jeff Davis", "Chip Esten"],
			salesmen: ["Colin Mochrie", "Kathy Kinney"],
			musicians: ["Bob Derkach"],
			album: "_Songs of the Gas Pumper_",
			songs: [
				{
					style: "80s electronica",
					title: "Wipe the Window, Hang the Freshener, Let's Go",
				},
			],
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Colin Mochrie", "Jeff Davis"],
			scenes: ["the soap opera", "_Like", "Seriously", "I Don't Know_"],
			lines: [
				"That looks like Einstein with an afro.",
				"Outsourced to medieval Scotland",
				"Two Amish walk into Sapphire's, oh yeah.",
				"Say hello to my little friend, his name is Paul.",
				"Gandhi and Joe Pesci in an...",
				"Quick, take a video of this laser beam shooting out of my ass and put it all over youtube.",
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Chip Esten", "Colin Mochrie"],
			moderators: ["Jeff Davis"],
			scene: "Screen printing and embroidering",
			styles: ["Western", "Horror", "Horror porn", "Romantic Shakespearean"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Chip Esten", "Drew Carey"],
			audienceMembers: ["Hilan", "Brandon"],
			scene: "Oil field mechanics",
		},
	],
};
