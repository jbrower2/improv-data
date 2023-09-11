import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-12",
	airdate: "2020-07-20",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Gary Anthony Williams",
			scene:
				"Excited Scotsman Colin and his American wife Ryan are vacationing near Loch Ness, in Scotland, when suddenly the fearsome Loch Ness Monster, played by Wayne, emerges from the depths",
			notes: [
				"Gimme somethin' dark, not too dark; gimme some film noir.",
				"Gimme somethin' more American; gimme some _Jerry Springer Show_.",
				"How 'bout a little bit o' _Fitty Shades o' Grey_?",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Debbie", "Maddy"],
			scene:
				"In rural Texas, Ryan and Colin are two cops patrolling a livestock auction; suddenly a gang of criminals arrive to steal the prize animals",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Wayne Brady", "Gary Anthony Williams"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Zombies",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad times to propose",
				"Characters that were rejected from _Sesame Street_",
				"Bad names for toothpaste brands",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Therapist_",
			songs: [
				{
					style: "Reggae",
					title: "You're Thinking of Your Mother",
				},
				{
					style: "Motown",
					title: "You're Just Nuts",
				},
			],
		},
	],
};
