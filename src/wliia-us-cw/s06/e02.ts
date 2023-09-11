import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-02",
	airdate: "2018-06-04",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "World's Worst",
			scenes: ["Clips from the world's worst television show"],
		},
		{
			name: "Show-Stopping Number",
			performers: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "In a shoe store",
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "Kit to help you get ready for a date",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If people behaved like catwalk models in their everyday lives",
				"If the musical _Les Miserables_ had been about embarrassing personal problems",
				"Things you should never do while driving",
				"Bad times to give birth",
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
					style: "Techno",
					title: "Mousse Me",
				},
				{
					style: "Ska",
					title: "Wax On, Wax Off",
				},
			],
		},
	],
};
