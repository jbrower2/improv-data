import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Gary Anthony Williams"
	| "Jeff Davis"
	| "Danielle Panabaker"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-05",
	airdate: "2023-04-28",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Colin Mochrie",
		"Ryan Stiles",
		"Gary Anthony Williams",
		"Jeff Davis",
	],
	guests: ["Danielle Panabaker"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scene to Music",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan and Colin are two inept plumbers working on a house, when suddenly the owner, Wayne, enters furious at the mess that they made",
			music: "Western film, _Psycho_, porn, country hillbilly",
		},
		{
			name: "Themed Restaurant",
			diners: ["Gary Anthony Williams", "Danielle Panabaker"],
			waiters: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			scene: "On a date",
			theme: "Tom Cruise movies",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Gary Anthony Williams", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about:
				"Beatrice, who died tragically in a horrible sushi restaurant related accident",
		},
		{
			name: "Daytime Talk Show",
			host: "Colin Mochrie",
			guests: ["Ryan Stiles", "Gary Anthony Williams"],
			audienceMembers: ["Wayne Brady"],
			topic: "_The Wizard of Oz_",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			album: "_Songs of the Car_",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely names for men's deodorant",
				"If farmers did everything in a sexy way",
				"Unliklely ways for a newsanchor to start the bulletin",
				"If people had to provide their own sound effects in everyday life",
			],
		},
		{
			name: "Scene With Masks",
			scene:
				"Wayne and his wife, Colin are at the doctors.  Ryan enters as a doctor before finally, a nurse, Jeff, arrives on the scene",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about: "[Mom](https://whoselineisitanyway.fandom.com/wiki/Mom_Hoedown)",
		},
	],
};
