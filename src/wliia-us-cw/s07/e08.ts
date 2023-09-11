import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Chris Jackson"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-08",
	airdate: "2019-08-05",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Chris Jackson"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Fred Ofcommittment",
			},
			coAnchor: {
				name: "Jonathan Mangum",
				alternateName: "Skippy",
				quirk: "Auctioneer selling off his own clothes",
			},
			sports: {
				name: "Ryan Stiles",
				alternateName: "Dinky Bladderbuss",
				quirk: "Mad scientist turning into a fly",
			},
			weather: {
				name: "Wayne Brady",
				alternateName: "Fairly Winkelstein",
				quirk: "Very old man going backwards through his life",
			},
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene: "An awkward dinner",
			film: "_Dungeon of Harrow_ (1962)",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Chris Jackson"],
			musicians: ["Laura Hall", "Linda Taylor"],
			styles: ["Sexy R&B"],
			about: "Single lady Beverly from the audience",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Really bad flight attendants",
				"Bad things to say or do when seeing your friend's baby for the first time",
				"Bad things to say or do on your honeymoon",
				"Inappropriate things to say in a tiny voice",
				"The pickup lines of sportsmen",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Chris Jackson",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a flirtatious Broadway actress having dinner at an Italian restaurant with her co-star Chris, who she is hoping to get to know a little better",
		},
	],
};
