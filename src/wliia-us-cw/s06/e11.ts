import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-11",
	airdate: "2018-08-06",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: {
				name: "Jeff Davis",
				alternateName: "Lavender Oats",
			},
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Bitten by a radioactive horse and becomes 'Stallion Man'",
				},
				{
					name: "Colin Mochrie",
					quirk: "Exorcist who uses his tongue to deal with evil spirits",
				},
				{
					name: "Ryan Stiles",
					quirk: "A day in the life of a lab rat",
				},
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Cory, who died tragically in a pet store-related accident",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Wayne Brady", "Jeff Davis"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Santas",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Weird to events to hire a strip-o-gram for",
				"Inappropriate times to do an evil laugh",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Beauty Salon_",
			songs: [
				{
					style: "Johnny Cash and Prince",
					title: "You're Soaking in It",
				},
				{
					style: "German opera",
					title: "The Shiatsu Is Too Hard",
				},
			],
		},
	],
};
