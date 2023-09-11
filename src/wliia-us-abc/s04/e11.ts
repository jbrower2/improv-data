import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-11",
	airdate: "2001-10-18",
	productionNumber: "296734-422",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Judge Judy",
				},
				{
					name: "Colin Mochrie",
					quirk: "Turns into a killer hamster when frightened",
				},
				{
					name: "Ryan Stiles",
					quirk: "TV's _Crocodile Hunter_ on various dangerous encounters",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Greg Proops", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "WCW Wrestling",
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: [
				"Colin is Beauty who's come to the castle on a desperate mission to plead with the Beast",
				"Ryan",
				"who has imprisoned her father",
			],
			lines: [
				"Get a load of those kielbasas.",
				"Aren't you hot in those rubber pants?",
				"Give it a tug and see what happens.",
				"Spit out the gum and kiss me hard!",
			],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Allthat Andabagofchips",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk:
					"Streaker who has bet his friends that he can get in all the camera shots",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Italian stud who would rather be picking up women",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Running all the legs of the Olympic 4x100 meter relay",
			},
		},
		{
			name: "Irish Drinking Song",
			performers: [
				"Wayne Brady",
				"Greg Proops",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Laura Hall"],
			about:
				"[Divorce](https://whoselineisitanyway.fandom.com/wiki/Divorce_Irish_Drinking_Song_(US_4-11))",
		},
	],
};
