import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kevin McHale"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-01",
	airdate: "2021-10-09",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Kevin McHale"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Heather Anne Campbell",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Amorous ballroom dancer looking for a new partner",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"In The Jerry Springer Show \"People say I'm a terrible lover - I'll prove them wrong\"",
				},
				{
					name: "Ryan Stiles",
					quirk: "Aggressive talking stag trying to assert his dominance",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Heather Anne Campbell"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Forward Rewind",
			performers: [
				"Colin Mochrie",
				"Wayne Brady",
				"Ryan Stiles",
				"Heather Anne Campbell",
			],
			scene:
				"Colin is an explorer and Wayne is his guide helping him find the lost tomb of the Aztecs, Ryan is the furious Aztec high priest who wakes up and puts a curse on him and Heather rushes in as Colin's passionate girlfriend afraid for his life",
		},
		{
			name: "Three-Headed Broadway Star",
			alternateName: "Three-Headed Song",
			singers: ["Wayne Brady", "Ryan Stiles", "Kevin McHale"],
			musicians: "Laura and Linda",
			song: "I love you for your teeth",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_The Mall_",
			songs: [
				{
					style: "Disco",
					title: "Can't Find My Way Out",
				},
				{
					style: "Lady Gaga",
					title: "There's No Smoking Here",
				},
			],
		},
	],
};
