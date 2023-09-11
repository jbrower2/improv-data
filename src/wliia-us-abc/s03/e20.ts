import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-20",
	airdate: "2001-02-22",
	productionNumber: "296722-325",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questionable Impressions",
			scene: "In a kitchen",
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan and Colin are two fisherman landing and gutting fish on a trawler, when Wayne, the captain, spots the storm of the century approaching",
			styles: [
				"Shakespeare",
				"Fellini",
				"Woody Allen",
				"Horror movie",
				"_Kung Fu_",
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[A lobotomy](https://whoselineisitanyway.fandom.com/wiki/Lobotomy_Irish_Drinking_Song)",
		},
		{
			name: "Duet",
			singers: ["Jeff Davis", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Jill, who sells tickets at Dodger Stadium",
			styles: ["The Rat Pack"],
		},
		{
			name: "Newsflash",
			anchormen: ["Jeff Davis", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Cockroaches (clips from _Joe's Apartment_ - 1996)",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Astronaut](https://whoselineisitanyway.fandom.com/wiki/Astronaut_Hoedown_(US_3-20))",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Jeff Davis", "Drew Carey"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Spanish"],
			film: "_El Donkey_",
		},
	],
};
