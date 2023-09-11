import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Griffin"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Katie Harman"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-02",
	airdate: "2002-09-16",
	productionNumber: "296735-509",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Kathy Griffin", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Katie Harman"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Hunky golf pro Ryan is giving a private lesson to flirtatious Beverly Hills wife Kathy, Wayne is Kathy's elderly millionaire husband who rides in on his motorized cart to confront them because he suspects they are planning to steal his fortune",
			notes: [
				"Do it like stand-up comics",
				"Do it like a sexy German movie",
				"Do it like obnoxious drunks",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Katie Harman",
			styles: ["A boy band"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unusual things for a neighbor to ask to borrow",
				"If you used stripper moves to perform mundane tasks",
				"World's worst thing to say the first time you see someone naked",
				"Strange television shows for Mr. Rogers to make a guest appearance on",
				"Disturbing times to make animal noises",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Katie"],
			scene:
				"Batman, who is Ryan, and Robin, who's Colin, are in the Batcave when they get a call from Commissioner Gordon saying that Batgirl is being held in an abandoned mineshaft",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Kathy Griffin"],
				["Drew Carey", "Wayne Brady"],
			],
		},
	],
};
