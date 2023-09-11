import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-16",
	airdate: "2005-03-21",
	productionNumber: "296744-7016",
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
						"_Mission Impossible_ agent lowering himself into a room to retrieve secret microfilm in Colin and Ryan's pants pockets",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Having passionate secret affairs with Wayne and Ryan's shoes but must decide between them",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Comedian who is bound and strapped to a time bomb that counts down whenever the audience isn't laughing",
				},
			],
		},
		{
			name: "Really Bad Hangover",
			performers: ["Colin Mochrie", "Kathy Greenwood"],
			sounds: ["Ryan Stiles", "Wayne Brady"],
			scene: "A couple gets up in the morning",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad songs to sing while making love",
				"The last thing you would expect to come out of your grandmother's mouth",
				"Adults who are still experiencing the terrible twos",
				"Unusual acts performed on talent night at the convent",
			],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Kathy Greenwood"],
			scene: "One day at the trailer park",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Circus_",
			songs: [
				{
					style: "Hawaiian",
					title: "[_Elephant trumpeting sound_]",
				},
				{
					style: "Fats Domino",
					title: "Lion of Love",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Drew Carey", "Kathy Greenwood"],
			translators: ["Ryan Stiles", "Colin Mochrie"],
			languages: ["Ukrainian"],
			film: "_Action in the Ukraine_",
		},
	],
};
