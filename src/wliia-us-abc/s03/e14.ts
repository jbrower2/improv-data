import { type Episode } from "../../types/episode.js";

export const e14: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-14",
	airdate: "2001-01-04",
	productionNumber: "296722-301",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "Too many doggy landmines",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Super Scooper",
				},
				{
					name: "Ryan Stiles",
					superpower: "Drill Sergeant Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Wet T-Shirt Contest Boy",
				},
				{
					name: "Wayne Brady",
					superpower: "Gap Ad Kid",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan is an android from the future and he has come back to warn hot dog vendor, Colin, the chosen one, that evil android Wayne is on a mission to kill him",
			styles: [
				"_I Love Lucy_",
				"Soap opera",
				"_Barney_",
				"Martial arts film",
				"50s musical",
			],
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Scoutmaster_",
			songs: [
				{
					style: "Jimmy Cliff",
					title: "Be Prepared, 'Cuz I Don't Know What's Going On",
				},
				{
					style: "Electric blues",
					title: "It's a Bear, You're on Your Own",
				},
				{
					style: "Limp Bizkit",
					title: "Killer Jamboree",
				},
			],
		},
		{
			name: "World's Worst",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Person to be stranded on a desert island with"],
		},
	],
};
