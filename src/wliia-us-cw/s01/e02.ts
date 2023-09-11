import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kevin McHale"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-02",
	airdate: "2013-07-16",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Kevin McHale"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you shouldn't say right after sleeping with someone for the very first time",
				"Lines you wouldn't hear in a weight-loss commercial",
				"Things you can say about your favorite pair of shoes, but not about your partner",
				"Bad things to say when you're running for office",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			about: "Kevin",
			styles: ["Gospel"],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Kevin McHale",
			scene:
				"Ryan is the high school choir teacher helping Kevin rehearse for the lead role in a singing competition and Kevin's arch rival Wayne comes in to prove he can perform better",
		},
		{
			name: "Sideways Scene",
			performers: ["Wayne Brady", "Colin Mochrie", "Heather Anne Campbell"],
			scene:
				"James Bond, played by Colin, is seducing a beautiful Russian spy, played by Heather, in a hotel room when acrobatic master criminal Wayne enters to attack them",
			styles: "_Poltergeist_ film, Cirque du Soleil",
		},
		{
			name: "Helping Hands",
			performers: [
				"Kevin McHale",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a carny at the local fairground and Kevin is a tourist who has come up to his stand",
		},
	],
};
