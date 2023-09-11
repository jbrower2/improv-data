import { type Episode } from "../../types/episode";

export const e21: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 21,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-21",
	airdate: "2014-10-10",
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
			name: "Let's Make a Date",
			host: "Gary Anthony Williams",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Frankenstein's monster getting other monsters together for a party",
				},
				{
					name: "Colin Mochrie",
					quirk: "Mad lady who thinks people's body parts are her pets",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Obnoxious giant talking tick looking for the perfect body to live on",
				},
			],
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Gary Anthony Williams",
				"Colin Mochrie",
				"Wayne Brady",
			],
			scene: "One evening in a bar",
			film: "_Beast from Haunted Cave_ (1959)",
		},
		{
			name: "What's in the Bag?",
			performers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			bagDonors: ["Molly", "Jenna"],
			scene:
				"Batman and Robin have come to rescue Catwoman who's been kidnapped and tied up in the Joker's booby-trapped lair",
		},
		{
			name: "World's Worst",
			scenes: ["Presidential candidate"],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Spa_",
			songs: [
				{
					style: "Lou Rawls and the cast of _South Park_",
					title: "Mud Bath and Hoedowns",
				},
				{
					style: "Swing",
					title: "Hot Rocks",
				},
			],
		},
	],
};
