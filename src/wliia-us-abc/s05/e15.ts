import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Griffin"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-15",
	airdate: "2003-04-03",
	productionNumber: "296735-514",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Kathy Griffin", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Questions Only",
			scenes: ["Passions erupt at a luxury beach resort"],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Gord Blessamerica",
			},
			coAnchor: {
				name: "Kathy Griffin",
				quirk:
					"Clueless teenage _Whose Line?_ groupie who has made it onto the show",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Don",
				quirk:
					"The dancing host of _Soul Train_ gradually morphing into a goofy white guy then back again",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Spikey",
				quirk:
					'Vegas stage magician who only knows silly "Dad" tricks but performs them as if he\'s David Copperfield',
			},
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Graduation](https://whoselineisitanyway.fandom.com/wiki/Graduation_Irish_Drinking_Song_(US_5-15))",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Disturbing things to hear someone yell out during sex",
				"Odd things to say using a sexy voice",
				"Bad moments for a woman's water to break",
				"When a passionate kiss is completely out of line",
			],
		},
		{
			name: "World's Worst",
			performers: [
				"Kathy Griffin",
				"Drew Carey",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scenes: ["Person to share an office with"],
		},
	],
};
