import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-16",
	airdate: "2001-11-22",
	productionNumber: "296734-417",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Questions Only",
			scenes: [
				"It's a bawdy Saturday night in a frontier town at the height of the gold rush",
			],
		},
		{
			name: "Infomercial",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			problem: "Excessive arm hair",
		},
		{
			name: "Two-Line Vocabulary",
			scene:
				"Colin's a jungle expedition leader desperately trying to get his colleagues to set up camp before darkness",
			lines: [
				{
					name: "Jeff Davis",
					lines: ["I resent that.", "Oh my god, that's enormous."],
				},
				{
					name: "Ryan Stiles",
					lines: ["Should I use my gun?", "What was that?"],
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Motorcycle_",
			songs: [
				{
					style: "Mariachi",
					title: "Old Lady on My Hog",
				},
				{
					style: "60s protest",
					title: "Asphalt and Chaps",
				},
				{
					style: "Thrash",
					title: "Rengengengengeng",
				},
			],
		},
		{
			name: "World's Worst",
			performers: ["Jeff Davis", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Neighbor"],
		},
	],
};
