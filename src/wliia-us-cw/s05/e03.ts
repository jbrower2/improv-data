import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Candice Patton"
	| "Laura Hall"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-03",
	airdate: "2017-06-12",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Candice Patton"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Game show host gradually turning into a horny werewolf",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"The adventures of 'Tongue Man', the world's most useless superhero",
				},
				{
					name: "Ryan Stiles",
					quirk: "Busy ant going through an action-packed day",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Thing to say or do on a flight"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Candice"],
			scene:
				"Two Navy seamen on a submarine, bedding down for the night, when suddenly they come under attack",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"The worst person to sit next to in a movie theater",
				"Perfume scents that won't sell",
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Farmer](https://whoselineisitanyway.fandom.com/wiki/Farmer_Hoedown)",
		},
	],
};
