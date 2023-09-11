import { type Episode } from "../../types/episode";

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
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-12",
	airdate: "2023-03-10",
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
			director: "Colin Mochrie",
			scene:
				"Ryan is shoplifting in a supermarket where he gets caught by aggeresive store detective, Gary.  Suddenly, his skanky girlfriend, Wayne, screeches in on a motorcycle to rescue him",
			notes: [
				"Do it like you're in a Tarantino movie",
				"Do it like Swedish porn",
				"Do it like it's a Hollywood musical, a big Hollywood musical",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Erica", "Luvia"],
			scene:
				"Ryan and Colin are FBI agents in New York who hear on the radio that Godzilla and King Kong are attacking the city",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad names for shampoo",
				"Innapropriate times to use a weird voice",
				"Lines from the world's worst songs",
				"What Aisha is thinking right now",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Firefighter_",
			songs: [
				{
					style: "Cajun",
					title: "That Wasn't Blackened A Second Ago",
				},
				{
					style: "Country ballad",
					title: "I Smell Smoke",
				},
			],
		},
	],
};
