import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anne King"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-10",
	airdate: "2006-03-23",
	productionNumber: "296751-8012",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
	games: [
		{
			name: "Award Show",
			presenters: ["Greg Proops", "Wayne Brady"],
			winners: ["Colin Mochrie", "Ryan Stiles"],
			for: "Criminals",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Greg Proops"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Fiery Hollywood explosions",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Got a hairy back](https://whoselineisitanyway.fandom.com/wiki/Got_a_Hairy_Back_Irish_Drinking_Song)",
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Film Dub",
			performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles"],
			scene: "The morning after a big party",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
			album: "_Songs of the Nurse_",
			songs: [
				{
					style: "Earth, Wind & Fire",
					title: "It's Not That Kind of Thermometer",
				},
				{
					style: "Mariachi",
					title: "Turn and Cough",
				},
			],
		},
		{
			name: "World's Worst",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Hitchhikers to give a ride to"],
		},
	],
};
