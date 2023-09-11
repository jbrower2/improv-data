import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-09",
	airdate: "2023-02-17",
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
			name: "Scenes from a Hat",
			scenes: [
				"World's worst stage act",
				"Strange products to sell with a sexy voiceover",
				"People you don't want to be stuck in an elevator with",
				"Things that don't sound as bad when you sing them",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Erin", "Kelly"],
			scene:
				"Ryan and Colin are two cavalry officers in the wild west.  They ride through Apache territory to defend a vauge train from armed robbers",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Gary Anthony Williams"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "People getting waxed",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Gary Anthony Williams"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "Songs of the Zookeeper",
			songs: [
				{
					style: "Louis Armstrong impersonators",
					title: "The Panda's Aren't Mating",
				},
				{
					style: "Bluegrass",
					title: "The Penguins Are Hot",
				},
			],
		},
	],
};
