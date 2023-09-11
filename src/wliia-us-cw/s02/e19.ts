import { type Episode } from "../../types/episode.js";

export const e19: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-19",
	airdate: "2014-08-18",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Aggressive Thai beauty therapist trying to give everyone a thorough waxing",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Deranged hunter trying to kill, skin and wear everything he sees",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Penguin gathering other penguins to look for food and shelter",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Jeff Davis"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Showering and grooming",
		},
		{
			name: "Award Show",
			presenters: ["Jeff Davis", "Wayne Brady"],
			winners: ["Colin Mochrie", "Ryan Stiles"],
			for: "_Jerry Springer_ guests",
		},
		{
			name: "Hoedown",
			about:
				"[Your eighteenth birthday](https://whoselineisitanyway.fandom.com/wiki/Your_Eighteenth_Birthday_Hoedown)",
			musicians: ["Laura Hall"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things that shouldn't have alarms",
				"Unlikely things to see on a nature show",
				"Jobs that shouldn't be done in a sexy way",
			],
		},
	],
};
