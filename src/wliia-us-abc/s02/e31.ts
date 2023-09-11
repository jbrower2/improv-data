import { type Episode } from "../../types/episode.js";

export const e31: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 31,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-31",
	airdate: "2000-04-06",
	productionNumber: "296718-234",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Denny Siegel",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Jar Jar Binks",
				},
				{
					name: "Colin Mochrie",
					quirk: "Disgruntled postal worker",
				},
				{
					name: "Ryan Stiles",
					quirk: "Still hypnotized from last night's stage show",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A day in the life of a busy caveman",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Denny Siegel"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Dallas", "Joe"],
			scene:
				"While tracking some dangerous outlaws, Ryan, who's Tonto, and Colin, who's the Lone Ranger, are ambushed by the outlaws",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Bad neighbor](https://whoselineisitanyway.fandom.com/wiki/Bad_Neighbor_Hoedown)",
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
				"Ryan is a Green Beret teaching Drew how to survive in the wild and live off the land",
		},
	],
};
