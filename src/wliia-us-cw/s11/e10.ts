import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Aisha Tyler"
	| "Brad Sherwood"
	| "Jeff Davis"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-10",
	airdate: "2023-02-24",
	host: "Aisha Tyler",
	performers: ["Brad Sherwood", "Jeff Davis", "Ryan Stiles", "Colin Mochrie"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"If Dr. Seuss delivered bad news",
				"Times when a slap to the face really doesn't help",
				"Weird things to read on a warning sign or label",
				"Unlikely subjects for a love song",
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Noah and his wife",
			secret: "Fast food",
		},
		{
			name: "Kick It",
			performers: ["Colin Mochrie", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Ski jumping",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Colin Mochrie", "Brad Sherwood"],
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Brad Sherwood", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Football_",
			songs: [
				{
					style: "The B52's",
					title: "Concussion Protocol",
				},
				{
					style: "Bob Dylan and Christopher Walken",
					title: "My Balls Deflated",
				},
			],
		},
	],
};
