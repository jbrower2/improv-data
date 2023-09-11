import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Chip Esten"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-11",
	airdate: "2017-08-24",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: [
		{
			name: "Chip Esten",
			alternateName: "Charles Esten",
		},
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "TSA agent hitting on the people he's checking over",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Velcro-covered doctor who keeps getting stuck to his patients",
				},
				{
					name: "Ryan Stiles",
					quirk: "The life cycle of a bald eagle",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Colin Mochrie"],
				["Ryan Stiles", "Jeff Davis", "Chip Esten"],
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Chip Esten", "Ryan Stiles", "Jeff Davis"],
			musicians: ["Laura Hall"],
			about:
				"[Pilot](https://whoselineisitanyway.fandom.com/wiki/Pilot_Hoedown_(US_13-11))",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"What _Sesame Street_ characters say during lovemaking",
				"Pick up lines in the sandwich store",
				"Things you shouldn't use your tongue for",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Chip Esten", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Halloween_",
			songs: [
				{
					style: "Ragtime",
					title: "Sugar High",
				},
				{
					style: "80s",
					title: "Splinters in Your Knuckles",
				},
			],
		},
	],
};
