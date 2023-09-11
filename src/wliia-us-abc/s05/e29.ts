import { type Episode } from "../../types/episode.js";

export const e29: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Griffin"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 29,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-29",
	airdate: "2003-08-08",
	productionNumber: "296736-606",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Kathy Griffin", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			topic: "The first astronaut to make love on the Moon",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Ann", "Valerie"],
			scene:
				"Chief of Police Colin and an angry leader of the village mob, Ryan, are in a forest one stormy night making their way towards Frankenstein's castle to hunt down the monster",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Graduation](https://whoselineisitanyway.fandom.com/wiki/Graduation_Irish_Drinking_Song_(US_5-29))",
		},
		{
			name: "Party Quirks",
			host: "Kathy Griffin",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Kathy's chatty manicurist possessed by an evil Scottish demon",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Wannabe stud practicing pickup lines in the mirror who screws up when faced with real women",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Apartment maintenance man who's come to fix things but behaves as though he's an action movie hero",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Kathy Griffin",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a wedding planner and entertainer who's running through the last-minute details on the day of Kathy's wedding",
		},
		{
			name: "Themed Restaurant",
			diners: ["Kathy Griffin", "Drew Carey"],
			waiters: ["Wayne Brady", "Ryan Stiles"],
			scene: "A couple out on a date",
			theme: "_Wizard of Oz_",
		},
	],
};
