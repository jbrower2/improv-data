import { type Episode } from "../../types/episode.js";

export const e19: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-19",
	airdate: "2020-10-26",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt in the army",
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Lynnanne", "Allison"],
			scene:
				"Colin and Ryan are doctors in a maternity ward when suddenly the hospital's attacked by demons from the bowels of Hell",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Wayne Brady", "Jeff Davis"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Vikings, dragons, and knights",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Inappropriate moments to chest bump",
				"Things you don't want to hear after getting naked",
				"If dogs sang songs about their lives",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Car_",
			songs: [
				{
					style: "German techno",
					title: "My Car Is a Metaphor",
				},
				{
					style: "Two tenors",
					title: "Behind Tinted Windows",
				},
			],
		},
	],
};
