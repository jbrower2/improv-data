import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-04",
	airdate: "2021-01-29",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at an office Christmas party",
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Colin Mochrie",
				"Greg Proops",
				"Wayne Brady",
			],
			scene: "Arguing over Dinner",
			film: "_The Missing Corpse_ (1945)",
		},
		{
			name: "Scene to Music",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan and Colin are two teens shoplifting in a supermarket when suddenly, store detective Wayne catches them red-handed",
			music: "_Godfather_, Spy film, Romance, Dramatic",
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Mira", "Craig"],
			scene:
				"Ryan and Colin are Marines whose motorboat runs aground on a mysterious island full of weird and dangerous animals",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"What the cast of _Sesame Street_ does when the cameras stop rolling",
				"If celebrities were doctors",
				"Inept criminals",
				"Catchphrases that will never catch on",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Greg Proops", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Safari_",
			songs: [
				{
					style: "Rhythm and booze",
					title: "Africa Hot",
				},
				{
					style: "Elvis Presley",
					title: "Pith Helmet and Khakis",
				},
			],
		},
	],
};
