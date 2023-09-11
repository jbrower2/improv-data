import { type Episode } from "../../types/episode.js";

export const e35: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 35,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-35",
	airdate: "2000-05-04",
	productionNumber: "296718-236",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Chester Moistmuffins",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Lionel Hotbiscuits",
				quirk: "The world's most tactless man",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Sizzling Baconpan",
				quirk: "RuPaul",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Flaky Croissants",
				quirk:
					"Has uncontrollable hots for a different person every 10 seconds",
			},
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Brad Sherwood"],
			scene: "Planning a five-year-old's birthday party",
		},
		{
			name: "Questionable Impressions",
			scene: "On a freeway",
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In a barbershop",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Plumber_",
			songs: [
				{
					style: "The Rolling Stones",
					title: "Sympathy for the Roto-Rooter",
				},
				{
					style: "German drinking song",
					title: "Who's Uncloggin'?",
				},
				{
					style: "90s R&B",
					title: "You Can't Flush Me Away",
				},
			],
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Colin Mochrie", "Drew Carey", "Ryan Stiles"],
			scene: "Three roommates watching the lottery numbers come on TV",
			startingLetter: "X",
		},
	],
};
