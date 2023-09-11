import { type Episode } from "../../types/episode";

export const e18: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-18",
	airdate: "2015-09-14",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"At an FBI gun range, trigger-happy partners Ryan and Keegan are practicing firing different weapons, suddenly a pair of crazy escaped convicts, both played by Wayne, burst in seeking revenge on the cops who put them away",
			notes: [
				"Do it like you're all on a Spanish game show",
				"Do it sexy",
				"Do it like you're catwalk models; don't walk like a cat",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If drill sergeants did other jobs",
				"The worst person to be stranded with on a desert island",
				"Opening songs of doomed Broadway musicals",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: [
				"Indiana Jones",
				"Ryan",
				"is on an adventure with his lovely girlfriend",
				"Colin",
				"they discover a hidden tomb",
				"become trapped inside.",
			],
			lines: [
				"Where the Hell are the restrooms?",
				"Nice boobs!",
				"I'm wearing your mother's underwear.",
				"Ryan",
				"Lick my face and call me Mindy.",
			],
		},
		{
			name: "Hats",
			topic: "World's worst dating video",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of New Orleans_",
			songs: [
				{
					style: "Animatronic country bear band",
					title: "I Found My Honey at the Mardi Gras",
				},
				{
					style: "Beyonce",
					title: "Booze in a Six-Foot Glass",
				},
			],
		},
	],
};
