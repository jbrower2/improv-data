import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Michael Weatherly"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-05",
	airdate: "2014-04-11",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Michael Weatherly"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Greg are two bickering city slickers on a weekend duck hunt and Wayne is a pair of outraged Appalachian brothers who ambush them",
			notes: [
				"Do it like you're on caffeine",
				"You do it like Woody Allen (Greg), you're Eric Cartman (Wayne), you're John Wayne (Ryan)",
				"Do it like you're all strippers",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Greg Proops"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Animals grooming and mating",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Your brand new baby](https://whoselineisitanyway.fandom.com/wiki/Your_Brand_New_Baby_Irish_Drinking_Song)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you should keep to yourself on a first date",
				"The dumbest ways to die",
				"What the _Whose Line?_ cast say in their sleep",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Michael Weatherly",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a Customs officer who has stopped businessman Michael as he goes through an airport",
		},
	],
};
