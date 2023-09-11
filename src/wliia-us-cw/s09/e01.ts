import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-01",
	airdate: "2021-01-08",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Earl with the Dragon Tattoo",
			},
			coAnchor: {
				name: "Jeff Davis",
				alternateName: "Jerry",
				quirk: "Amorous Potter Working at his wheel on new pot, Colin",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Army cadet who thinks the studio is an assault course",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Lumpy Garoo",
				quirk:
					"Having furious arguments with members of his family in the studio",
			},
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Mexican food](https://whoselineisitanyway.fandom.com/wiki/Mexican_Food_Hoedown)",
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit to help a person get a better night's sleep",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Strange lines to hear in a war movie",
				"Things you should not turn into a competition",
				"Things you can say on a farm that you cannot say about your partner",
				"What newsanchors are saying when they're shuffling their papers",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of San Francisco_",
			songs: [
				{
					style: "Johnny Cash and Yoko Ono",
					title: "Tale of the Fog Bandit",
				},
				{
					style: "Hawaiian",
					title: "I Haight-Ashbury",
				},
			],
		},
	],
};
