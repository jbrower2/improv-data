import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-09",
	airdate: "2018-07-23",
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
			name: "Party Quirks",
			host: "Heather Anne Campbell",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Constantly evolving through all the stages of man and back again",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Gung-ho rescuer who thinks people are trapped in everyone's butts",
				},
				{
					name: "Ryan Stiles",
					quirk: "A series of celebrities becoming possessed",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Wayne Brady", "Heather Anne Campbell"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Monster movies",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Heather Anne Campbell"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Ryan is Jack, Colin is Jill",
			secret: "Bones",
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Heather Anne Campbell",
				"Colin Mochrie",
				"Wayne Brady",
			],
			scene: "A special delivery",
			film: "_The Magic Serpent_ (1966)",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Gymnasium_",
			songs: [
				{
					style: "Latin pop",
					title: "Hernia",
				},
				{
					style: "Beyonce",
					title: "Love on the Treadmill",
				},
			],
		},
	],
};
