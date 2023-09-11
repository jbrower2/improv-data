import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-03",
	airdate: "1998-08-19",
	productionNumber: "296648-106",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "The greatest lover in France",
				},
				{
					name: "Colin Mochrie",
					quirk: "Going through all the stages of getting drunk",
				},
				{
					name: "Ryan Stiles",
					quirk: "Pig farmer from Arkansas",
				},
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "At a hospital",
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Packed Tightly",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Can no longer hide his love for the anchorman",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "James Brown",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "The anchor's angry neighbor",
			},
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Bus Driver_",
			songs: [
				{
					style: "Michael Jackson",
					title: "You're Not on My Route",
				},
				{
					style: "Country western",
					title: "Pffffff",
				},
				{
					style: "80s funk",
					title: "I Got a Flat Tire, I Got a Flat Tire",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: [
				{
					name: "Ryan Stiles",
					alternateName: "Thomas Guide",
				},
				{
					name: "Greg Proops",
					alternateName: "Mark the Page",
				},
			],
			fieldReporter: "Drew Carey",
			onTheGreenScreen: "_Konga_ (1961)",
		},
	],
};
