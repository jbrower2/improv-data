import { type Episode } from "../../types/episode";

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
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-22",
	airdate: "2000-02-03",
	productionNumber: "296718-227",
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
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Ollie Oxenfree",
			},
			coAnchor: {
				name: "Kathy Greenwood",
				alternateName: "Janissa",
				quirk: "Colin's spoiled bad-tempered teenage daughter",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Brick Bruck",
				quirk: "Having trouble mastering his jet pack",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Sprinkley Days",
				quirk: "A lifer about to attempt a daring and elaborate prison escape",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Leigh, the lunch lady",
			styles: ["A singing strip-o-gram"],
		},
		{
			name: "Themed Restaurant",
			diners: ["Colin Mochrie", "Kathy Greenwood"],
			waiters: ["Ryan Stiles", "Wayne Brady"],
			scene:
				"Two business associates who've stepped out for an illicit romantic lunch",
			theme: "A war zone",
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "A burger joint or fast-food place",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Senior citizen Olympic events",
				"The number one thing that you shouldn't lick",
				"Alternate endings to famous films",
				"Things that can spoil a date",
				"Hillary Clinton's recurring nightmare",
				"Things you should never ever ever say while making love",
				"The first thing that Adam said to Eve",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Halloween](https://whoselineisitanyway.fandom.com/wiki/Halloween_Hoedown_(US))",
		},
	],
};
