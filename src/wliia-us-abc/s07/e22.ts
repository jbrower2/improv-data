import { type Episode } from "../../types/episode.js";

export const e22: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 22,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-22",
	airdate: "2005-05-02",
	productionNumber: "296744-7022",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Panicky frat boy waking up on his wedding day, blindfolded, naked and handcuffed to Colin",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Incompetent 1940s gangster who bungles a bank robbery and has to make a desperate escape",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Smart-mouthed brat who's been told never to lick the metal plate in Colin's head in winter",
				},
			],
		},
		{
			name: "Motown Group",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			song: "Do the Fireman",
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In a lingerie shop",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Other people Dorothy might have met and what they would have asked the Wizard for",
				"Something you always wanted to tell your parents but couldn't, until now",
				"Titles of self-help books written by dogs",
				"World's worst person to share an elevator with",
				"What phone sex operators are really doing on the other end of the line",
				"How men can make the most of their time while they're stuck cuddling with the little woman",
				"The last thing Drew Carey thinks before he drifts off to sleep",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Weight](https://whoselineisitanyway.fandom.com/wiki/Weight_Hoedown)",
		},
	],
};
