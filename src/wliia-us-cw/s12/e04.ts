import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-04",
	airdate: "2023-04-21",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Strange things to hear from your waiter",
				"Strange things to shout out during sex",
				"If fairy tale characters appeared on _Jerry Springer_",
				"Pick up lines that won't work on Aisha",
				"Strange things to see or hear on a children's TV show",
			],
		},
		{
			name: "Sideways Scene",
			performers: ["Wayne Brady", "Colin Mochrie", "Keegan-Michael Key"],
			scene:
				"Colin and Keegan are a bickering pair of tired and hungry explorers in the jungle trying to set up camp.  Suddenly, a very angry Tarzan, Wayne, swings in from the trees",
			styles: "Science-fiction movie, _Street Fighter_ video game",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Bend",
			performers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			scene:
				"Panicking mother Colin has called in a priest, Ryan, to excorsice her daughter, Wayne, whom she believes to be possessed",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about: "Promotion",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Spring Break_",
			songs: [
				{
					style: "Cuban",
					title: "I Can't Stop Throwing Up",
				},
				{
					style: "Ska",
					title: "Who Did You Sleep With Last Night?",
				},
			],
		},
	],
};
