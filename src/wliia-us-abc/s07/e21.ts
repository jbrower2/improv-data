import { type Episode } from "../../types/episode";

export const e21: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 21,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-21",
	airdate: "2005-04-25",
	productionNumber: "296744-7021",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "All the characters from _Austin Powers_",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Dunk tank loudmouth unknowingly suspended above a pool of piranha fish",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Series of kids coming to see department store Santa Colin with their Christmas wish lists",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Nicole, a receptionist",
			styles: ["Swing"],
		},
		{
			name: "Bartender",
			bartender: "Chip Esten",
			musicians: ["Laura Hall", "Linda Taylor"],
			performers: [
				{
					name: "Colin Mochrie",
					quirk: "Angry about his haircut",
				},
				{
					name: "Ryan Stiles",
					quirk: "In love with his shoes",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Entire night's entertainment at a Hawaiian hotel luau",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Salty old sea dog who can see amazing sights through people's bellybuttons",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Series of temperamental actresses screen testing for a nude love scene with the host",
				},
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Broke up](https://whoselineisitanyway.fandom.com/wiki/Broke_Up_Irish_Drinking_Song)",
		},
		{
			name: "World's Worst",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Person to be leader of the world in a crisis"],
		},
	],
};
