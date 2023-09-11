import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-08",
	airdate: "2021-03-12",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"During World War I, French Air Force pilots Ryan and Jonathan are starting up their biplane, when suddenly dashing German fighter pilot Wayne flies in to attack them",
			notes: [
				"You've got to interact more, so you find each other and everything really sexy",
				"Do it like _Les Mis_",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Inappropriate times to crack open a beer",
				"Bad times to have an annoying buddy with you",
				"If doctors were extremely stupid",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Krishna", "Jenna"],
			scene:
				"In the 1930s, Ryan and Colin are two San Francisco cops who get called to deal with a riot at Alcatraz prison",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jonathan Mangum"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Coast Guard_",
			songs: [
				{
					style: "Disco",
					title: "Women and Children First",
				},
				{
					style: "Punk",
					title: "Whale",
				},
			],
		},
	],
};
