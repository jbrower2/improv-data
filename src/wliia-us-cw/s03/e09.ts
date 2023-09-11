import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Aisha Tyler"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-09",
	airdate: "2015-06-19",
	host: "Aisha Tyler",
	performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady", "Jeff Davis"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Seymour Gotnewglasses",
			},
			coAnchor: {
				name: "Jeff Davis",
				alternateName: "Terry",
				quirk: "Plumber desperately trying to plug all the leaks in Colin",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Going through an entire crazy weekend in Vegas",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "A war movie in 30 seconds",
			},
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Baseball](https://whoselineisitanyway.fandom.com/wiki/Baseball_Hoedown_(US_11-09))",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Jeff Davis"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Kissing",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about your clothes, that you can't say about your partner",
				"Terrible ways to start a conversation",
				"Bad times to be naked",
				"The dating videos of _Sesame Street_ characters",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Jeff Davis"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Los Angeles_",
			songs: [
				{
					style: "Ska",
					title: "Free Lakers Tickets",
				},
				{
					style: "Prince and Keanu Reeves",
					title: "I'm on a New Diet",
				},
			],
		},
	],
};
