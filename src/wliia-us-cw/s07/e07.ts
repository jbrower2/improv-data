import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-07",
	airdate: "2019-07-29",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Heather Anne Campbell",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Frat boy astronaut causing havoc on the space station",
				},
				{
					name: "Colin Mochrie",
					quirk: "Cheerful Swedish milkmaid determined to milk everyone",
				},
				{
					name: "Ryan Stiles",
					quirk: "Obnoxious frog looking for a princess to kiss him",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Heather Anne Campbell"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Insects",
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Colin is Prince Charming visiting the beautiful Cinderella",
				"Ryan",
				"with the glass slipper in hand",
			],
			lines: [
				"Does this look infected?",
				"I killed a drifter and nobody cared.",
				"Quick, spank me.",
				"Get a load of these melons.",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"TV shows that shouldn't be performed in a sexy way",
				"Strange things for a psychiatrist to say",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Car Mechanic_",
			songs: [
				{
					style: "Jason Derulo",
					title: "You're Down a Quart",
				},
				{
					style: "Tap dance music",
					title: "Jump Start",
				},
			],
		},
	],
};
