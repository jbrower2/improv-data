import { type Episode } from "../../types/episode";

export const e25: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 25,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-25",
	airdate: "2001-03-29",
	productionNumber: "296722-329",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Thor Buttockth",
			},
			coAnchor: {
				name: "Brad Sherwood",
				alternateName: "Jerry Jubilee",
				quirk: "Aggressive fire and brimstone televangelist",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Janise",
				quirk: "Female dancer in a steamy rap video",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Sparky Funee",
				quirk: "15-year old gawky teenager practicing making out",
			},
		},
		{
			name: "Doo-wop",
			singers: ["Brad Sherwood", "Wayne Brady", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			song: "Do the Trucker",
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In the circus",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "Songs of the Beekeeper",
			songs: [
				{
					style: "Ska",
					title: "Hornets, Yellowjackets, and Wasps",
				},
				{
					style: "Green Day",
					title: "Grabbin' My Pollen",
				},
				{
					style: "Square dance",
					title: "Whack the Hive",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Brad Sherwood", "Colin Mochrie"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
