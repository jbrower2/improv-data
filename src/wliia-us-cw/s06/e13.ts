import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-13",
	airdate: "2018-08-20",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"All-action lifeguard who thinks people are in trouble and need CPR",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Gung-ho cave explorer who keeps getting stuck in increasingly tight holes",
				},
				{
					name: "Ryan Stiles",
					quirk: "Horny grizzly bear who's just woken from hibernation",
				},
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Food Poisoning](https://whoselineisitanyway.fandom.com/wiki/Food_Poisoning_Irish_Drinking_Song)",
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Louise", "Yinny"],
			scene:
				"In a deleted scene from _Jurassic Park_, Ryan and Colin are two park rangers who hear over the public address system that the dinosaurs have escaped",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Los Angeles_",
			songs: [
				{
					style: "The Beach Boys",
					title: "Move!",
				},
				{
					style: "Japanese metal",
					title: "I'm Getting You in the Tar Pit",
				},
			],
		},
	],
};
