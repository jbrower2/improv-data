import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-08",
	airdate: "2000-11-09",
	productionNumber: "296722-320",
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
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Kathy Greenwood"],
			scene:
				"Colin is a mad scientist who comes home to find his wife Kathy in bed with Ryan, who is his latest creation",
			styles: [
				"_Brady Bunch_",
				"_Indiana Jones_",
				"Spanish soccer telecast",
				"_Crocodile Hunter_",
				"Melodrama",
				"_Jeopardy!_",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about:
				"Cyrus, who is retired from a lots of things, his favorite being the Merchant Marines",
			styles: ["Mae West"],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In an operating room",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Kathy Greenwood"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "An old-timey strip club",
		},
		{
			name: "Motown Group",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			song: "Do the Navy SEAL",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[The lottery](https://whoselineisitanyway.fandom.com/wiki/Lottery_Hoedown_(US_3-08))",
		},
	],
};
