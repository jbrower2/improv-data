import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-16",
	airdate: "2003-04-10",
	productionNumber: "296735-518",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Backwards Scene",
			performers: ["Ryan Stiles", "Brad Sherwood", "Wayne Brady"],
			scene:
				"At a casino, Wayne is left standing naked while his friend Ryan and croupier Brad laugh",
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Angela, a sign language interpreter",
			styles: ["The Blues Brothers"],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Thor Justthinkingaboutit",
			},
			coAnchor: {
				name: "Brad Sherwood",
				alternateName: "Happy",
				quirk:
					"Pushy small-time talent agent desperate to get his client Colin some work",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Michael Jackson and James Brown in a celebrity deathmatch",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Legs Flamingo",
				quirk: "Rise and fall of a 1930s gangster",
			},
		},
		{
			name: "Boogie Woogie Sisters",
			singers: ["Wayne Brady", "Brad Sherwood", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Bear wrestling",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you wish you hadn't said to that Hell's Angel",
				"What really frightened Miss Muffet away",
				"Dr. Seuss-inspired pickup lines",
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			about:
				"[Ryan's wife](https://whoselineisitanyway.fandom.com/wiki/Ryan%27s_Wife_Hoedown)",
		},
	],
};
