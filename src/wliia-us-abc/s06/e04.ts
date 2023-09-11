import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-04",
	airdate: "2004-07-29",
	productionNumber: "296733-347",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Angry _Jerry Springer_ guest",
				},
				{
					name: "Colin Mochrie",
					quirk: "Ventriloquist whose dummy is sabotaging his chances",
				},
				{
					name: "Ryan Stiles",
					quirk: "Frustrated writer going insane at a remote hotel",
				},
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "_The Poseidon Adventure_",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A Jedi Knight gets the call that the Empire is attacking",
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Greg Proops", "Colin Mochrie"],
			scene: "One day at the gas station",
			film: "_Teenagers from Outer Space_ (1959)",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Hockey_",
			songs: [
				{
					style: "Fats Domino",
					title: "Body Check of Love",
				},
				{
					style: "Smokey Robinson",
					title: "Pffft",
				},
				{
					style: "Kool & the Gang",
					title: "I Wanna Score on You",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Moving](https://whoselineisitanyway.fandom.com/wiki/Moving_Hoedown)",
		},
	],
};
