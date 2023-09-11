import { type Episode } from "../../types/episode.js";

export const e33: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 33,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-33",
	airdate: "2001-05-04",
	productionNumber: "296722-338",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "No more Bee Gees",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Disco Boy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Captain Hummingbird",
				},
				{
					name: "Chip Esten",
					superpower: "The Lap Dance Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "The Barroom Brawler",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kris, an assistant to an accountant",
			styles: ["Line-dancing song"],
		},
		{
			name: "Scenes Cut from a Movie",
			movies: ["_Braveheart_", "_Exorcist_", "_Free Willy_", "_Star Wars_"],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Cowboy_",
			songs: [
				{
					style: "Hanson",
					title: "MMMMoo",
				},
				{
					style: "Grunge",
					title: "Hey, That Horse Looks Good",
				},
				{
					style: "Doo-wop ballad",
					title: "They Shot My Pa",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Chip Esten", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Plastic surgery](https://whoselineisitanyway.fandom.com/wiki/Plastic_Surgery_Hoedown_(US_3-33))",
		},
	],
};
