import { type Episode } from "../../types/episode.js";

export const e17: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-17",
	airdate: "2014-08-04",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Francis Fulloffrenchpeople",
			},
			coAnchor: {
				name: "Jeff Davis",
				alternateName: "Dallas Finely",
				quirk: "Soap opera doctor desperate to save Colin's life",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Hard-bitten cop rounding up the notorious Bad Haircut Gang",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Partially Cloudy",
				quirk: "A passionate football fan going through the day of a big game",
			},
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Taking your date to get pancakes](https://whoselineisitanyway.fandom.com/wiki/Taking_Your_Date_to_Get_Pancakes_Irish_Drinking_Song)",
		},
		{
			name: "Party Quirks",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "A succession of different video game characters",
				},
				{
					name: "Colin Mochrie",
					quirk: "The entire _Lord of the Rings_ trilogy in thirty seconds",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"A series of sperm using different modes of transport to get to the egg",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Talent show act"],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Jeff Davis"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Beach_",
			songs: [
				{
					style: "Opera",
					title: "Sand in the Crack",
				},
				{
					style: "Amy Winehouse and Christopher Walken",
					title: "Flirtin' with the Lifeguard",
				},
			],
		},
	],
};
