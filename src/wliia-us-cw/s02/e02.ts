import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tara Lipinski"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-02",
	airdate: "2014-03-21",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Tara Lipinski"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is Little Red Riding Hood who arrives at her grandmother's cottage, Keegan is the Big Bad Wolf posing as the grandmother, Wayne enters as a heroic woodsman coming to Ryan's rescue",
			notes: [
				"Do it like you're all easily aroused",
				"Do this doing as many impressions of famous people as you can",
			],
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Tara",
			styles: ["Elvis"],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Tara Lipinski",
			scene:
				"Amorous skating instructor Ryan is teaching his protégé Tara some sexy new moves, when Wayne, her jealous skating boyfriend, enters, mayhem ensues",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Keegan-Michael Key"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Keegan", "Tara"],
			scene:
				"A young honeymooning couple on the _Titanic_ relaxing in their luxury cabin when suddenly it hits an iceberg",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Strange things to shout out during sex",
				"Gifts you really don't want to get",
				"If the Winter Olympics were held in the nude",
			],
		},
	],
};
