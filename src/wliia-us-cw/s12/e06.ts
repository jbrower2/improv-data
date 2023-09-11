import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Rachel Bloom"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-06",
	airdate: "2023-05-05",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Rachel Bloom"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Barely Conscious",
			},
			coAnchor: {
				name: "Jeff Davis",
				quirk: "Colin's drunken bride embarrasing him on their wedding day",
			},
			sports: {
				name: "Wayne Brady",
				quirk:
					"An aggresive fitness instructor leading the entire audience in a class",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Expirencing every natural disaster in 30 seconds",
			},
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Rachel Bloom",
			scene:
				"Ryan is a 1940's gangster hitting on raunchy nightclub singer and dancer Rachel when suddenly Ryan's jealous showgirl fiancée Wayne bursts in",
		},
		{
			name: "Party Quirks",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Vaudville acts getting yanked offstage just before their acts get offensive",
				},
				{
					name: "Colin Mochrie",
					quirk: "Unlucky cat going through his nine lives",
				},
				{
					name: "Ryan Stiles",
					quirk: "Various opening scenes from cheesy adult movies",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Weird ways for Aisha to open the show",
				"If the musical _Les Miserables_ had been about embarrassing personal problems",
				"Things you should never do while driving",
				"Inappropriate times to give an evil laugh",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Beauty Salon_",
			songs: [
				{
					style: "Rat Pack",
					title: "Hot Rocks",
				},
				{
					style: "Bluegrass rap",
					title: "Expensive Lotions and Creams",
				},
			],
		},
	],
};
