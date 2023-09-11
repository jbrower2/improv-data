import { type Episode } from "../../types/episode.js";

export const e39: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 39,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-39",
	airdate: "2000-05-18",
	productionNumber: "296718-239",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Film TV and Theater Styles",
			performers: [
				"Ryan Stiles",
				{
					name: "Colin Mochrie",
					alternateName: "Captain Hair",
				},
				"Wayne Brady",
			],
			scene:
				"Colin and Ryan, who are stealing dinosaur bones from an exhibit, are interrupted by the night watchman, Wayne",
			styles: [
				"Chick flick",
				"Keystone Cops",
				"Workout video",
				"Porn",
				"Golf show",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Katie, who works at Hoagie Oagie, a fast food place",
			styles: ["A boy band"],
		},
		{
			name: "Song Titles",
			scene: "At a beach party",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Chip Esten"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Colin Mochrie making faces in previous performances",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Plastic surgery](https://whoselineisitanyway.fandom.com/wiki/Plastic_Surgery_Hoedown_(US_2-39))",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Drew Carey", "Wayne Brady"],
			translators: ["Ryan Stiles", "Colin Mochrie"],
			languages: ["Canadian"],
			film: "_Out and About_",
		},
	],
};
