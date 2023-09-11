import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-01",
	airdate: "2022-10-14",
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
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Joy", "Renee"],
			scene:
				"Ryan and Colin are two criminals who break into a pet store in order to tunnel into the bank next door.",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely things for football players to say in a huddle",
				"Weird things for a driving instructor to say",
				"Jobs that should never be done in the nude",
			],
		},
		{
			name: "Radio Show",
			radioDjs: ["Wayne Brady", "Jonathan Mangum"],
			callers: ["Colin Mochrie", "Ryan Stiles"],
			about: "Soup",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[A Date at the Movies](https://whoselineisitanyway.fandom.com/wiki/A_Date_at_the_Movies_Irish_Drinking_Song)",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Park_",
			songs: [
				{
					style: "DMX and Yoda",
					title: "Keep off the Grass",
				},
				{
					style: "Jump-Rope Chant",
					title: "Goose Poo",
				},
				{
					style: "Bob Dylan and a Seal",
					title: "Broken Swings and Monkey Bars",
				},
			],
		},
	],
};
