import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Simmons"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-17",
	airdate: "2003-06-20",
	productionNumber: "296735-521",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Richard Simmons"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Multiple Personalities",
			performers: ["Greg Proops", "Wayne Brady", "Ryan Stiles"],
			scene:
				"On a safari in the deepest African jungle when they realize their guides have deserted them and they are lost",
			props: [
				{
					prop: "Fly-swatter",
					personality: "Richard Simmons",
				},
				{
					prop: "Machete",
					personality: "Elvis",
				},
				{
					prop: "Binoculars",
					personality: "Scooby-Doo",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Greg Proops"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Richard Simmons",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Richard Simmons",
			styles: ["Disco"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Richard"],
			scene:
				"On a luxury cruise liner, a couple makes the most of a day of sunbathing, water sports, and entertainment",
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			movers: ["Drew Carey", "Richard Simmons"],
			scene:
				"Ryan is an outlaw who holds up beautiful heiress Colin's stagecoach",
		},
	],
};
