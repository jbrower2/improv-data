import { type Episode } from "../../types/episode.js";

export const e17: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Stephen Colbert"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-17",
	airdate: "1999-02-24",
	productionNumber: "296717-116",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Stephen Colbert",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Stephen Colbert",
				alternateName: "Louis Dengle",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Bill Rutherford",
				quirk: "Mother doing baby talk to the anchor",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Skip Totheloo",
				quirk: "Bill Cosby",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Storm Surge",
				quirk: "In love with the camera",
			},
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "Avalanche",
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Bonita", "Kelly"],
			scene:
				"Two Navy SEALs at the beach about to embark on a mission to blow up an enemy boat",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Stephen Colbert"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Pro Bowler_",
			songs: [
				{
					style: "French ballad",
					title: "Spray Mon Shoes",
				},
				{
					style: "DooWop",
					title: "Gutterball",
				},
				{
					style: "Jerry Lee Lewis",
					title: "Bowl Me, Strike Me, Spare Me",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Stephen Colbert",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "World's longest touchdown celebration",
				},
				{
					name: "Colin Mochrie",
					quirk: "Lobster trying to talk his way out of being cooked",
				},
				{
					name: "Ryan Stiles",
					quirk: "Footage of crash test dummies",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Television](https://whoselineisitanyway.fandom.com/wiki/Television_Hoedown)",
		},
	],
};
