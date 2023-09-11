import { type Episode } from "../../types/episode.js";

export const e29: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 29,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-29",
	airdate: "2002-03-14",
	productionNumber: "296734-402",
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
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Fiendish Spanish colonel Ryan rides in to kidnap beautiful Mexican girl Kathy, Zorro, who is Wayne, arrives to rescue her",
			notes: [
				"Do it like a 1950s musical",
				"Do it like you're performing in perfect dark",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Doug, a chemistry professor",
			styles: ["_James Bond_ movie theme"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Kathy Greenwood"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Bats",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Kathy"],
			scene: "Two guys arrive at the beach to sunbathe and surf",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Difficult things to say with a straight face",
				"Announcements made over Hell's PA system",
				"Rejected gift ideas that the three Wise Men considered",
			],
		},
		{
			name: "World's Worst",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["TV advertisement"],
		},
	],
};
