import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-03",
	airdate: "2005-01-24",
	productionNumber: "296744-7003",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Award Show",
			presenters: ["Greg Proops", "Wayne Brady"],
			winners: ["Colin Mochrie", "Ryan Stiles"],
			for: "Best bitter divorce",
		},
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			topic: "Noah announcing he's eaten all the animals on the ark",
		},
		{
			name: "Infomercial",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			product: "Items to help stop drinking",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Mary", "Lynne"],
			scene:
				"Ryan and Colin are two Musketeers who are with their French-speaking third Musketeer, they're getting ready to ride off to a heavily-guarded castle to spring The Man in the Iron Mask from the dungeon",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Getting your first car](https://whoselineisitanyway.fandom.com/wiki/First_Car_Irish_Drinking_Song)",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Wayne Brady", "Drew Carey"],
			],
		},
	],
};
