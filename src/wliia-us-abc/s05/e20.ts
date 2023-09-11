import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-20",
	airdate: "2003-06-27",
	productionNumber: "296736-603",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Tad Zawayuhuhuhuhilikeit",
			},
			coAnchor: {
				name: "Greg Proops",
				alternateName: "Homey",
				quirk: "Goofy white guy desperately trying to act street",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Ruby Squealer",
				quirk:
					"Aging female Broadway performer in a big song and dance number whose extensive plastic surgery begins to collapse",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Hunky Dory",
				quirk:
					"Very strict father whose deadbeat sons are in the studio and he's decided it's time for them to get real jobs",
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Like _Oklahoma!_, musicals about different US states",
				"Sumo wrestlers in other professions",
				"Anecdotes dogs would tell if they appeared on talk shows",
			],
		},
		{
			name: "Film Dub",
			performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles"],
			scene: "One day at the doctor's lab",
			film: "_The Black Scorpion_ (1957)",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Having a series of stormy love affairs from beginning to end with each person at the party",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Serious scientist testing how much annoyance people can stand before cracking",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Rat traveling through a maze to reach the cameras where he's given either cheese or an electric shock",
				},
			],
		},
		{
			name: "Hats",
			alternateName: "Dating Service Video",
			topic: "World's worst dating service video",
		},
		{
			name: "Irish Drinking Song",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Yelled out the wrong name in bed](https://whoselineisitanyway.fandom.com/wiki/Yelled_Out_the_Wrong_Name_in_Bed_Irish_Drinking_Song)",
		},
	],
};
