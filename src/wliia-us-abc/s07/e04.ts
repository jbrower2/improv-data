import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-04",
	airdate: "2005-01-24",
	productionNumber: "296744-704",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Lars Oftheredhotlovers",
			},
			coAnchor: {
				name: "Chip Esten",
				quirk:
					"Lion from _The Wizard of Oz_ who was given an overactive libido instead of courage",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Oog",
				quirk: "Desperate caveman looking for food, a warm cave, and a mate",
			},
			weather: {
				name: "Ryan Stiles",
				quirk:
					"Becomes extremely nervous when he suddenly discovers it's the first day of Ryan hunting season",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Mira, a first-grade Hebrew teacher",
			styles: ["Gospel"],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: [
				"Moments before sunrise",
				"Buffy the Vampire Slayer",
				"who is Colin",
				"comes to kill Count Dracula",
				"Ryan",
				"as he is draining the last drops of blood from his latest victim",
			],
			lines: [
				"Grab the handle, Stella, and give it a yank.",
				"You're fanny is a masterpiece.",
				"Hoochie Mama's comin' home.",
				"Who let the dogs out?",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Chip Esten"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Rome_",
			songs: [
				{
					style: "The Brady Bunch",
					title: "Pizza Heck Outta Me",
				},
				{
					style: "60s R&B",
					title: "My Tower Is Leaning",
				},
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Fell out of the car](https://whoselineisitanyway.fandom.com/wiki/Fell_out_of_the_Car_Irish_Drinking_Song)",
		},
	],
};
