import { type Episode } from "../../types/episode";

export const e39: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 39,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-39",
	airdate: "2001-06-14",
	productionNumber: "296734-407",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Violently jealous woman who keeps catching people making eyes at her boyfriend Colin",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"The severed head of an evil genius kept alive in a lab launching his plans for world domination",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Castaway who washes up on the _Whose Line_ set and must use whatever he finds to survive",
				},
			],
		},
		{
			name: "Two-Line Vocabulary",
			scene:
				"Colin is performing a life-or-death operation on a powerful mob boss, Ryan is the anesthesiologist, and Brad is the nurse assisting him",
			lines: [
				{
					name: "Brad Sherwood",
					lines: [
						"Is it always that big?",
						"I don't think that's a good idea.",
					],
				},
				{
					name: "Ryan Stiles",
					lines: ["Run that by me again.", "Who needs this?"],
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Las Vegas_",
			songs: [
				{
					style: "AC/DC",
					title: "I Dropped My Chips in Your Nuts",
				},
				{
					style: "Bluegrass",
					title: "High-Roller Hooker",
				},
				{
					style: "Motown (The Mediocres)",
					title: "Roulette of Love",
				},
			],
		},
		{
			name: "World's Worst",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Superbowl halftime show"],
		},
	],
};
