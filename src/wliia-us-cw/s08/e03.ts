import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-03",
	airdate: "2020-04-13",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Kimberly", "Jennifer"],
			scene:
				"Ryan and Colin are two Canadian Mounties on patrol when suddenly the get the call that an army of robots is attacking the city",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely lines from romance novels",
				"Weird things to do in a gym",
				"Things guaranteed to kill the mood in the bedroom",
				"Sandwiches you'd never want to eat",
			],
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Colin Mochrie",
				"Greg Proops",
				"Wayne Brady",
			],
			scene: "A vacation gone wrong",
			film: "_She Gods of Shark Reef_ (1958)",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "A series of Greg's inflatable dolls constantly deflating",
				},
				{
					name: "Colin Mochrie",
					quirk: "TV scientist using people to explain the human body",
				},
				{
					name: "Ryan Stiles",
					quirk: "Various small woodland animals dying in horrible ways",
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Greg Proops", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Motel_",
			songs: [
				{
					style: "Bluegrass",
					title: "Nothin' in the Vending Machine",
				},
				{
					style: "Latin pop",
					title: "Mas Huevos, Por Favor",
				},
			],
		},
	],
};
