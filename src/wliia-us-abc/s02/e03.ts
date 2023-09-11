import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-03",
	airdate: "1999-09-30",
	productionNumber: "296718-206",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Jackson Goodreader",
			},
			coAnchor: {
				name: "Greg Proops",
				quirk: "A heckler",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Reginald Reginald Reginald",
				quirk: "Precocious multi-talented child star",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Angry NBA player about to get ejected",
			},
		},
		{
			name: "African Chant",
			singer: "Wayne Brady",
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Pat, a sprinkler guy",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"State mottoes rejected for license plates",
				"What God created on an off day",
				"Bad things to hear from the doctor who's operating on you",
				"President Clinton's things-to-do list",
			],
		},
		{
			name: "Changing Emotions",
			alternateName: "Change Emotion",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			props: [
				{
					prop: "Canteen",
					emotion: "Lust",
				},
				{
					prop: "Jungle knife",
					emotion: "Fury",
				},
			],
			scene: "Big game hunters lost in the jungle",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Exterminator_",
			songs: [
				{
					style: "Rockabilly",
					title: "Ooh, a Spider",
				},
				{
					style: "Eartha Kitt",
					title: "You Go Under the House",
				},
				{
					style: "Cher",
					title: "Ants, Rats, and Gypsy Moths",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Village People](https://whoselineisitanyway.fandom.com/wiki/Village_People_Hoedown)",
		},
	],
};
