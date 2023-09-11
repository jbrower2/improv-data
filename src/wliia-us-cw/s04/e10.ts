import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-10",
	airdate: "2016-07-27",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Mad inventor Ryan is fixing his faulty security robot Jeff, when suddenly Ryan's malfunctioning robot girlfriend Wayne bursts from the closet",
			notes: [
				"Do it like you're on Spring Break",
				"Do it like you're strippers",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Ryan is Tarzan, Colin is Jane",
			secret: "Trunkful of money",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely things to hear at Thanksgiving",
				"If everyday tasks were done in a sexy way",
				"Unfortunate times to get food poisoning",
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
					style: "Chinese opera with Pavarotti",
					title: "The Mammal Love Song",
				},
				{
					style: "Russian folk",
					title: "The Lion Ate the Pig",
				},
			],
		},
	],
};
