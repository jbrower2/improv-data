import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-14",
	airdate: "2015-08-10",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "World's Worst",
			scenes: ["Newsanchor or reporter"],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Spiderman",
				"Ryan",
				"has come to rescue his girlfriend Mary Jane",
				"Colin",
				"from the Green Goblin",
			],
			lines: [
				"It's time for your bed bath, Mr. Winkie!",
				"Can you rub it for me?",
				"My thong is too tight.",
				"You look like a pig.",
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"~~Adultery~~ [Affair](https://whoselineisitanyway.fandom.com/wiki/Affair_Irish_Drinking_Song)",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Gary Anthony Williams"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Gary Anthony Williams", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Cynthia, who died tragically in a hockey-related accident",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Cab Driver_",
			songs: [
				{
					style: "Ragtime",
					title: "Oh, the Meter's Too Fast",
				},
				{
					style: "Barry White and Barry White",
					title: "There's Glass Between Us",
				},
			],
		},
	],
};
