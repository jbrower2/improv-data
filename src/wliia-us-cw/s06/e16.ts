import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-16",
	airdate: "2018-09-24",
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
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt in a sci-fi movie",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Anne", "Naomi"],
			scene:
				"Two of the Three Musketeers hear that they must fight their way into a heavily-armed castle to rescue the hysterical French royal family",
		},
		{
			name: "Film Dub",
			performers: [
				"Wayne Brady",
				"Gary Anthony Williams",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scene: "One day at the ranch",
			film: "_Trail Riders_ (1942)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Really bad teachers",
				"Things that you can say at the gym that you can't say about your partner",
				"The world's worst medical ads",
				"Pick up lines of Aisha Tyler",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Bartender_",
			songs: [
				{
					style: "Barry White and Nicki Minaj",
					title: "Too Much Salt on the Rim",
				},
				{
					style: "Modern funk",
					title: "Why's the Floor So Sticky?",
				},
			],
		},
	],
};
