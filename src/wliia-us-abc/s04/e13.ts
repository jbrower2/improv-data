import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-13",
	airdate: "2001-11-07",
	productionNumber: "296734-418",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			topic: "Tin Man announcing he and Dorothy have just had a child",
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Multiple Personalities",
			performers: ["Greg Proops", "Ryan Stiles", "Colin Mochrie"],
			props: [
				{
					prop: "Captain's hat",
					personality: "John Wayne",
				},
				{
					prop: "Lifesaver",
					personality: "Liberace",
				},
				{
					prop: "Telescope",
					personality: "Rain Man",
				},
			],
			scene:
				"On a cruise on the SS _Poseidon_ when it's hit by a tidal wave and capsizes",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Retirement_",
			songs: [
				{
					style: "Destiny's Child",
					title: "Puttering Around the Garden",
				},
				{
					style: "Polka",
					title: "I'm Gonna Torch the Place",
				},
				{
					style: "Metal",
					title: "Shut Those Kids Up, I'm Trying to Sleep!",
				},
			],
		},
		{
			name: "World's Worst",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Self-help instructional videos"],
		},
	],
};
