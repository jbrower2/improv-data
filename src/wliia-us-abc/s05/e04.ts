import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Florence Henderson"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-04",
	airdate: "2002-09-30",
	productionNumber: "296735-512",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Florence Henderson"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Change Letter",
			performers: [
				"Brad Sherwood",
				"Colin Mochrie",
				"Ryan Stiles",
				"Wayne Brady",
			],
			scene:
				"A young guy, Brad, and his girlfriend Colin are making out in her bedroom when her disapproving parents, Ryan and Wayne, walk in unexpectedly",
			cantSay: "L",
			mustSay: "P",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Florence Henderson",
			styles: ["Disco"],
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene:
				"Colin and Brad are two bakers finishing the night shift at a bakery when Ryan comes in to open up",
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			dubber: "Brad Sherwood",
			dubbed: "Florence Henderson",
			scene:
				"Hunky pool boy Ryan starts flirting with saucy housewife Florence, as he persuades her to go skinny-dipping with him, her hot-headed husband Colin arrives home with a gift for her",
		},
		{
			name: "Helping Hands",
			performers: [
				"Florence Henderson",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Over family dinner, Jan Brady, played by Ryan, is talking with her mother, played by Florence, about how to attract boys",
		},
	],
};
