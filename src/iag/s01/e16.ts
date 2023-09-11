import { type Episode } from "../../types/episode";

export const e16: Episode<
	| "Drew Carey"
	| "Heather Anne Campbell"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_16",
	airdate: "2011-05-02",
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
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Chip Esten", "Heather Anne Campbell"],
			moderators: ["Jonathan Mangum"],
			scene: "A sweeper truck",
			styles: [
				"Western",
				"Spanish",
				"Silent film",
				"Silent Spanish",
				"Dr. Seuss",
				"Spanish Dr. Seuss",
				"Horror",
				"Shakespeare",
			],
		},
		{
			name: "Two-Headed Expert",
			expert: ["Drew Carey", "Jonathan Mangum"],
			otherExpert: ["Heather Anne Campbell", "Chip Esten"],
			scene: "A mortician convention in Cancun",
		},
		{
			name: "Duet",
			singers: ["Jonathan Mangum", "Jeff Davis"],
			about: "Jordan, a student of psychology",
			styles: ["Opera"],
		},
		{
			name: "Story",
			leader: "Ryan Stiles",
			storytellers: [
				"Heather Anne Campbell",
				"Drew Carey",
				"Jonathan Mangum",
				"Jeff Davis",
				"Chip Esten",
			],
			title: "_The Green Giant Flies Away_",
		},
	],
};
