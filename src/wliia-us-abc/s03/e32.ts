import { type Episode } from "../../types/episode.js";

export const e32: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 32,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-32",
	airdate: "2001-05-03",
	productionNumber: "296722-331",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "No more shampoo",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Captain Dandruff",
				},
				{
					name: "Ryan Stiles",
					superpower: "Elvis Kid",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Bondage",
				},
				{
					name: "Wayne Brady",
					superpower: "Trick Tap-Dancing Kid",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Three soldiers wading through a dangerous river on a mission to blow up an enemy bridge, Colin is the tough sergeant, and Ryan and Wayne are two rookies who have reached their breaking point",
			styles: [
				"Anime",
				"_Charlie's Angels_",
				"Spanish soap opera",
				"Burlesque",
			],
		},
		{
			name: "Wedding",
			audienceMember: "Kristin, who stresses like you would not believe",
			spouse: "Colin Mochrie",
			masterOfCeremonies: "Greg Proops",
			drunkenRelative: {
				name: "Ryan Stiles",
				alternateName: "Uncle Bob",
			},
			entertainer: {
				name: "Wayne Brady",
				alternateName: 'James Brown\'s brother, "Wayne Brown"',
			},
			musicians: ["Laura Hall", "Linda Taylor"],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Safari_",
			songs: [
				{
					style: "Bob Fosse",
					title: "There's a Pygmy in My Pocket and a Rhino on My Tail",
				},
				{
					style: "Scat",
					title: "Hey, Wha'd I Step in?",
				},
				{
					style: "Salsa",
					title: "[_elephant trumpeting sound_]",
				},
			],
		},
		{
			name: "Three-Headed Broadway Star",
			alternateName: "Three-Headed Broadway",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			to: "Michelle from the audience",
			musical: "_Doin' Time_",
			song: "B-Block Wife",
		},
	],
};
