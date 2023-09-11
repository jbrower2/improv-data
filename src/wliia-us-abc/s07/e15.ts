import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-15",
	airdate: "2005-03-14",
	productionNumber: "296744-7015",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Questionable Impressions",
			scene: "At a police station",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Bill, a liquor clerk",
			styles: ["R.E.M."],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Giselle", "Jenny"],
			scene:
				"Farmer Ryan and his wife Colin are rounding up their animals because of an approaching storm when they are amazed to see a UFO landing",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Brad Sherwood"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Las Vegas_",
			songs: [
				{
					style: "Modern Calypso",
					title: "I Lost My Wife on a Pair of Threes",
				},
				{
					style: "Russian",
					title: "Watered-Down Drinks",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Doctor](https://whoselineisitanyway.fandom.com/wiki/Doctor_Hoedown_(US_7-15))",
		},
	],
};
