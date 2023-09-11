import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-07",
	airdate: "2021-11-20",
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
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Walt Wouldyoudoifisangoutoftune",
			},
			coAnchor: {
				name: "Keegan-Michael Key",
				alternateName: "Jerry",
				quirk:
					"Aggressive boxer at a pre-fight press conference, squaring up to his opponent, Colin",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Binky Doowell",
				quirk: "The rise and fall of a teen pop star",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Cumulus Jones",
				quirk:
					"Short tempered bouncer who discovers someone has stolen part of his lunch",
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Inappropriate things to say at a funeral",
				"If people acted in their jobs like college kids on spring break",
				"Strange things to read on road signs while you're driving",
				"Your version of Hell",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Keegan-Michael Key"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Pandas",
		},
		{
			name: "Party Quirks",
			host: "Keegan-Michael Key",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Everyone involved in a children's beauty pageant",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Manic faith healer who makes people more beautiful with his healing hands",
				},
				{
					name: "Ryan Stiles",
					quirk: "Dog the Bounty Hunter",
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Hairdressers_",
			songs: [
				{
					style: "Justin Bieber",
					title: "Mousse Me Up",
				},
				{
					style: "Beyonce",
					title: "Look at My Roots",
				},
			],
		},
	],
};
