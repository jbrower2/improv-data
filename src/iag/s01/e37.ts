import { type Episode } from "../../types/episode.js";

export const e37: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 37,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_37",
	airdate: "2011-05-31",
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
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Ryan Stiles", "Drew Carey"],
			moderators: ["Jeff Davis"],
			scene: "Yacht brokering",
		},
		{
			name: "Duet",
			singers: ["Jeff Davis", "Chip Esten"],
			about: "Debbie, a mathematics teacher",
			styles: ["Broadway musical"],
		},
		{
			name: "Question This",
			host: "Ryan Stiles",
			contestants: ["Kathy Kinney", "Greg Proops", "Drew Carey", "Chip Esten"],
			answers: [
				"Lamborghini",
				"Uranium",
				"Pickles",
				"Madrid",
				"Ukraine",
				"Skeeballs",
				"Luigi",
				"Sacrilegious",
				"Cork",
				"Uvula",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Chip Esten", "Jeff Davis"],
			salesmen: ["Ryan Stiles", "Greg Proops"],
			musicians: ["Bob Derkach"],
			album: "_The Greatest Hits of the Bank Manager Trainee_",
			songs: [
				{
					style: "60s funk",
					title: "Let's Leave the Dollar In",
				},
			],
		},
	],
};
