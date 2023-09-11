import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anna Wanselius"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-01",
	airdate: "1999-09-16",
	productionNumber: "296718-209",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Characters from _South Park_",
				},
				{
					name: "Colin Mochrie",
					quirk: "In a medieval dungeon being tortured for information",
				},
				{
					name: "Ryan Stiles",
					quirk: "Vulture looking for the ultimate feast",
				},
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: "Laura and Linda",
			musical: "_Lumberjacks in Love_",
			song: "Timber",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Chip Esten"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Stand Sit Lie",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			misspokenScene:
				"Three campers are preparing for bed in the woods on the night of a full m...",
			scene:
				"Wayne has talked her boyfriend, Colin, into coming to Ryan's tattoo parlor",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
			album: "_Songs of the Dentist_",
			songs: [
				{
					style: "Salsa",
					title: "Just Say No...vocaine",
				},
				{
					style: "Wilson Pickett",
					title: "It Has to Come Out",
				},
				{
					style: "Heavy metal",
					title: "I Ain't Wearin' No Braces",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Chip Esten", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Car salesmen](https://whoselineisitanyway.fandom.com/wiki/Car_Salesmen_Hoedown)",
		},
	],
};
