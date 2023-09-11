import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laila Ali"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-02",
	airdate: "2021-10-09",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Laila Ali"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Kick It",
			alternateName: "Get Down",
			performers: ["Wayne Brady", "Jeff Davis", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene:
				"Wayne is a female doctor from the big city who has newly arrived in a small rural town, Jeff is the arrogant doctor whose practice she is joining, Ryan is a pregnant young woman coming to give birth, and Colin is somebody else",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Master plans of the least ambitious supervillains",
				"Hit shows on the hillbilly channel",
				"Never-before-seen coming-out-of-the-closet episodes of classic TV programs",
				"What Aisha is thinking right now",
				"Unlikely cartoon characters to cameo in an adult movie",
			],
		},
		{
			name: "Party Quirks",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Security guard with a metal detector in his butt, checking people over",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Everything gives him increasingly outlandish allergic reactions",
				},
				{
					name: "Ryan Stiles",
					quirk: "Teething toddler who, when he bites, doesn't want to let go",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about: "[Prom](https://whoselineisitanyway.fandom.com/wiki/Prom_Hoedown)",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Laila",
			styles: ["Stadium rock"],
		},
	],
};
