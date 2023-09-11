import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Candice Accola"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-03",
	airdate: "2013-07-23",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Candice Accola"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is on a space station examining an alien life form with his android assistant, Keegan, and Wayne is the mother alien who bursts in to attack them",
			notes: [
				"Do it as bitchy fashionistas",
				"Do it like you're guests on _The Jerry Springer Show_",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Keegan-Michael Key"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			about: "Candice",
			styles: ["Latin pop"],
		},
		{
			name: "World's Worst",
			alternateName: "Dating Profiles",
			scenes: ["World's worst dating profile"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Keegan", "Candice"],
			scene:
				"Two intrepid mountaineers facing various obstacles in a bid to reach the summit of Mount Everest",
		},
	],
};
