import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-08",
	airdate: "1998-12-09",
	productionNumber: "296717-111",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Denny Siegel",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Amorous Italian opera singer",
				},
				{
					name: "Colin Mochrie",
					quirk: "Gradually turning into a pig",
				},
				{
					name: "Ryan Stiles",
					quirk: "Gets an electric shock every time he has an impure thought",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Trisha, who teaches swimming lessons",
			styles: ["Louis Armstrong"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Denny Siegel"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Party Quirks",
			host: "Denny Siegel",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Pinball in a machine",
				},
				{
					name: "Colin Mochrie",
					quirk: "Chicken with its head cut off",
				},
				{
					name: "Ryan Stiles",
					quirk: "The films of Alfred Hitchcock",
				},
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Butcher_",
			songs: [
				{
					style: "Disco",
					title: "Tenderize This",
				},
				{
					style: "Ray Charles' cousin Buddy",
					title: "Who's Got the Pork?",
				},
				{
					style: "Ska",
					title: "Wieners, Legs, and Chops",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan, who is aiming for a promotion, has invited his boss Drew over to impress him with his barbecue",
		},
	],
};
