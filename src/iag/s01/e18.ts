import { type Episode } from "../../types/episode.js";

export const e18: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_18",
	airdate: "2011-05-04",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Colin Mochrie",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Moving People",
			alternateName: "Moving Bodies",
			performers: ["Drew Carey", "Greg Proops"],
			moversFromTheAudience: ["Katherine", "Rob"],
			scene: "A day at the racquetball court",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moderators: ["Jeff Davis"],
			scene: "A school fundraiser",
		},
		{
			name: "Question This",
			host: "Ryan Stiles",
			contestants: ["Colin Mochrie", "Greg Proops", "Drew Carey", "Jeff Davis"],
			answers: [
				"Winnemucca",
				"Radon",
				"Tahiti",
				"Femur",
				"Lederhosen",
				"Pluto",
				"Ex-Lax",
				"Prius",
			],
		},
		{
			name: "Story",
			leader: "Ryan Stiles",
			storytellers: [
				"Colin Mochrie",
				"Drew Carey",
				"Greg Proops",
				"Chip Esten",
				"Jeff Davis",
			],
			title: "_The Pig, the Cow, and Yesterday Evening_",
		},
	],
};
