import { type Episode } from "../../types/episode";

export const e29: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 29,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-29",
	airdate: "2001-04-26",
	productionNumber: "296722-336",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Kathy Greenwood"],
			scene:
				"Ryan is a truck driver running late, he stops to give a ride to hitchhikers Colin and his pregnant wife Kathy, who's in labor",
			styles: [
				"Sci-fi",
				"_Charlie's Angels_",
				"_Brady Bunch_",
				"Murder mystery",
				"_Crocodile Hunter_",
				"_Gong Show_",
				"Horror movie",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Michelle, a meter maid in Orange County",
			styles: ["Public Enemy"],
		},
		{
			name: "The Millionaire Show",
			host: "Colin Mochrie",
			contestant: "Ryan Stiles",
			friendOnThePhone: "Kathy Greenwood",
			audienceMember: "Wayne Brady",
			theme: "_Jerry Springer_",
		},
		{
			name: "Motown Group",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			song: "Do the Carjacker",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[_Playboy_ photographer](https://whoselineisitanyway.fandom.com/wiki/Playboy_Photographer_Hoedown)",
		},
	],
};
