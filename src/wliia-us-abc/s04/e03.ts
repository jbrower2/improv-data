import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-03",
	airdate: "2001-09-20",
	productionNumber: "296722-324",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Puffy Dontneedcombs",
			},
			coAnchor: {
				name: "Chip Esten",
				alternateName: "Dewey Donthe",
				quirk: "Young cowboy rodeo star",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Juan Tanamera",
				quirk: "Entire U.S. Synchronized Swimming team",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Dippy DeLoo",
				quirk: "Rapidly descending the evolutionary scale",
			},
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In a bike shop",
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Marilee, a pet photographer",
			styles: ["Aerosmith", "Run DMC"],
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "Hair removal products",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Blind date](https://whoselineisitanyway.fandom.com/wiki/Blind_Date_Hoedown_(US_4-03))",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			to: "Kim from the audience",
			song: "I Love You for Your Shoes",
		},
	],
};
