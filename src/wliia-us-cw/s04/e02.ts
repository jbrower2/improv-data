import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-02",
	airdate: "2016-05-23",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Benedict Buttryingtobenicer",
			},
			coAnchor: {
				name: "Keegan-Michael Key",
				quirk:
					"Colin's high school football coach furious at his poor performance",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Pinkie",
				quirk: "An entire episode of _America's Got Talent_ in 30 seconds",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Going through a perfect day in the life of Ryan Stiles",
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"The world's worst neighbor",
				"Things you can say about a restaurant, that you cannot say about your partner",
				"Bad racehorse names for an announcer to call during the race",
			],
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "Male-grooming kit",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[The beach](https://whoselineisitanyway.fandom.com/wiki/Beach_Irish_Drinking_Song)",
		},
		{
			name: "Helping Hands",
			performers: [
				"Keegan-Michael Key",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Two 1930s Italian Mafia gangsters planning a heist",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about:
				"Veronica, who died tragically in an Italian restaurant-related accident",
		},
	],
};
