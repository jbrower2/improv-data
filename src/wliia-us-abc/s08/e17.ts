import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-17",
	airdate: "2007-12-04",
	productionNumber: "296751-8009",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Rocky training for a fight",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Shapeshifting Terminator who becomes an evil version of whoever he touches",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Turning into a protective mother penguin catching food for her young",
				},
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Peter Pan has flown into Wendy's bedroom for the first time to ask her for her help in NeverNeverLand",
			],
			lines: [
				"Say hello to little Elvis.",
				"Here's a trick I picked up in the Navy.",
				"You don't sweat that much for a fat girl.",
				"Spank me hard and call me Regis!",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Kathy Greenwood"],
				["Wayne Brady", "Colin Mochrie"],
				["Ryan Stiles", "Kathy Greenwood"],
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of James Bond, the International Spy_",
			songs: [
				{
					style: "Chuck Berry",
					title: "007 Heaven",
				},
				{
					style: "Aerosmith",
					title: "I Just Do It for the Women",
				},
				{
					style: "Tina Turner",
					title: "No, I Expect You to Die!",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Drew Carey", "Kathy Greenwood"],
			translators: ["Ryan Stiles", "Colin Mochrie"],
			languages: ["Hebrew"],
			film: "_Meshuggana!_",
		},
	],
};
