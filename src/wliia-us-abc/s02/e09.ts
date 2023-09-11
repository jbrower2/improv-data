import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-09",
	airdate: "1999-11-04",
	productionNumber: "296718-221",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Song Titles",
			scene: "At an airport",
		},
		{
			name: "Duet",
			alternateName: "Gangsta Rap",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "An astronaut",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad choices for pets",
				"Strange things to find in your bed",
				"Dangerous things to do while you are naked",
				"Baby names that will one day get your child's ass kicked",
				"Little-known facts about our host, Drew Carey",
				"Things you wish you hadn't said to the President",
			],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Chester Steakknife",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Carl Turkeybaster",
				quirk: "Has chosen this moment to become a nudist",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Carlos Burritogrande",
				quirk: "Latin pop heartthrob",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Franklin",
				quirk: "Mafia boss who realizes the camera is an assassin",
			},
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Ryan Stiles", "Brad Sherwood"],
			musicians: "Laura and Linda",
			musical: "_Gee You Smell Terrific_",
			song: "I Love Cheese",
		},
		{
			name: "Hoedown",
			performers: [
				"Brad Sherwood",
				"Drew Carey",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Laura Hall"],
			about:
				"[Christmas](https://whoselineisitanyway.fandom.com/wiki/Christmas_Hoedown_(US))",
		},
	],
};
