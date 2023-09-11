import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-09",
	airdate: "2021-03-19",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt in a department store",
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Jeff Davis", "Wayne Brady"],
			scene: "Making plans for the evening",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[A bar](https://whoselineisitanyway.fandom.com/wiki/Bar_Irish_Drinking_Song)",
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			audienceMembers: ["Allie", "Cheyenne"],
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Ryan and Colin are testing weapons in an arms factory when they are suddenly attacked by a gang of international criminals",
		},
		{
			name: "Party Quirks",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "A 'Fast and the Furious' movie in 30 seconds",
				},
				{
					name: "Colin Mochrie",
					quirk: "Every character in a cheesy soap opera about Jeff's life",
				},
				{
					name: "Ryan Stiles",
					quirk: "A series of increasingly old streakers",
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Zookeeper_",
			songs: [
				{
					style: "Johnny Cash and Shakira",
					title: "Look What the Monkeys Are Doing",
				},
				{
					style: "Bluegrass",
					title: "Escape",
				},
			],
		},
	],
};
