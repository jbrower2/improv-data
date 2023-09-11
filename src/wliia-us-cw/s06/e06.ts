import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-06",
	airdate: "2018-07-02",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Greg Proops",
			scene:
				"French chef Ryan is working with his bad-tempered son, Colin, when their restaurant is hit by an earthquake, Wayne is the heroic rescue worker who comes in to save them",
			notes: [
				"Do it as crazy _Jackass_ stunts",
				"Do it as strippers",
				"Let's do it again, but this time, follow me on this, sci-fi",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Greg Proops"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Wayne Brady", "Greg Proops"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Nuclear war",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Pick up lines on the farm",
				"First lines from the world's worst speeches",
				"If Elvis had done regular jobs",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Ryan Stiles", "Wayne Brady"],
			salesmen: ["Greg Proops", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Safari_",
			songs: [
				{
					style: "Reggae",
					title: "I Shot the Giraffe",
				},
				{
					style: "Swing",
					title: "Sailin' down the River",
				},
			],
		},
	],
};
