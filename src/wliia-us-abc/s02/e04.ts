import { type Episode } from "../../types/episode.js";

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
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-04",
	airdate: "1999-10-07",
	productionNumber: "296718-201",
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
					quirk: "An exorcist",
				},
				{
					name: "Colin Mochrie",
					quirk: "Rabid Canadian ice hockey player",
				},
				{
					name: "Ryan Stiles",
					quirk: "Strip club bouncer",
				},
			],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Greg Proops", "Colin Mochrie"],
			scene: "One day in the saloon",
			film: "_The Babe Ruth Story_ (1948)",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: "Laura and Linda",
			musical: "_Bob_",
			song: "Flea Dip",
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			scene:
				"Ryan and Greg are two archaeologists about to open the tomb of the cursed mummy, Colin",
			styles: [
				"High school drama",
				"Bergman film",
				"_Afterschool Special_",
				"_Real World_",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Dog-Walker_",
			songs: [
				{
					style: "Bluegrass",
					title: "Scoop It Up",
				},
				{
					style: "Funk",
					title: "Don't Be Sniffin' There",
				},
				{
					style: "Neville Brothers",
					title: "No More Soft Food for You",
				},
			],
		},
		{
			name: "World's Worst",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Things to say at a major awards ceremony"],
		},
	],
};
