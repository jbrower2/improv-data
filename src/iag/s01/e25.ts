import { type Episode } from "../../types/episode";

export const e25: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 25,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_25",
	airdate: "2011-05-13",
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
			name: "Duet",
			singers: ["Chip Esten", "Jeff Davis", "Brad Sherwood"],
			about: "Belinda, a bartender",
			styles: ["Sexy cool jazz"],
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Ryan Stiles", "Chip Esten"],
			scenes: ["_Welcome to Hell_"],
			lines: [
				"Not tonight honey, I have a headache.",
				"How many licks does it take to get to the center?",
				"From behind?",
			],
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Ryan Stiles", "Kathy Kinney"],
			moderators: ["Colin Mochrie"],
			scene: "Lost the keys to the car",
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Jeff Davis", "Chip Esten"],
			salesmen: ["Drew Carey", "Colin Mochrie"],
			musicians: ["Bob Derkach"],
			album: "_The Best of the Hog Farmer_",
			songs: [
				{
					style: "Country swing",
					title: "Sooey!",
				},
				{
					style: "French",
					title: "Our Love Is Like Pork",
				},
			],
		},
	],
};
