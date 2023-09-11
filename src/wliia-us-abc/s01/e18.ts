import { type Episode } from "../../types/episode.js";

export const e18: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-18",
	airdate: "1999-03-10",
	productionNumber: "296717-115",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Questions Only",
			scenes: ["At a singles bar right before closing"],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Dennis, an engineer",
			styles: ["60s girl group"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Denny Siegel"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Santa convention",
		},
		{
			name: "Hey, You Down There!",
			narrator: "Denny Siegel",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			topic: "Camping in the wild",
		},
		{
			name: "Party Quirks",
			host: "Denny Siegel",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Succession of teenage girls at a slumber party",
				},
				{
					name: "Colin Mochrie",
					quirk: "The Summer Olympics in 30 seconds",
				},
				{
					name: "Ryan Stiles",
					quirk: "Running giraffe that gets shot with a tranquilizer dart",
				},
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "A tsunami",
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a temperamental pastry chef who is trying to create a masterpiece for the demanding owner of his restaurant, Drew",
		},
	],
};
