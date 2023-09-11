import { type Episode } from "../../types/episode.js";

export const e21: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anne King"
> = {
	number: 21,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-21",
	airdate: "2001-03-15",
	productionNumber: "296722-307RX",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Sickof Survivor",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "A talking parrot",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Aggressive old drunk who used to do the sports",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Siegfried and Roy whose act is going dangerously wrong",
			},
		},
		{
			name: "Two-Line Vocabulary",
			performers: ["Greg Proops", "Ryan Stiles", "Colin Mochrie"],
			lines: [
				{
					name: "Colin Mochrie",
					lines: [
						"I didn't know you had one of those.",
						"That's completely disgusting.",
					],
				},
				{
					name: "Ryan Stiles",
					lines: ["God I love you.", "How does that feel?"],
				},
			],
			scene:
				"Ryan is the president, who's just been caught with a woman, and he has called in Colin, his female press secretary, and Greg, his adviser, to solve the crisis",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Determined little old lady who likes tight butts",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Increasingly violent bouncer clearing the bar at closing time",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"The third of each animal species trying to talk its way onto Noah's ark",
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
			album: "_Songs of the Nurse_",
			songs: [
				{
					style: "Reggae",
					title: "Four-Hundred-Dollar Bill",
				},
				{
					style: "Wyclef Jean and The Rock",
					title: "I'm Tired of Wearing White",
				},
				{
					style: "Rockabilly",
					title: "I Wish I Were a Doctor",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Wayne Brady"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
