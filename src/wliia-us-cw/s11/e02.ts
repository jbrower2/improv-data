import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Padma Lakshmi"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-02",
	airdate: "2022-10-21",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Padma Lakshmi"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Heather Anne Campbell",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Delinquent teenage girl who thinks people are cars for her to steal and joyride",
				},
				{
					name: "Colin Mochrie",
					quirk: "Bosley recruiting and training three new Charlie's Angels",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Playboy octopus keeping a series of passionate affairs going at the same time",
				},
			],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Padma Lakshmi",
			scene:
				"Mad scientist Ryan is putting the final touches on his brand new, gorgeous, robot woman Padma.  Suddenly, his hideous, failed prototype woman, Wayne enters.",
		},
		{
			name: "World's Worst",
			scenes: ["Person to go out on a date with"],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Roommate_",
			songs: [
				{
					style: "Stevie Wonder",
					title: "How Did The Fridge Get In The Basement?",
				},
				{
					style: "Blues/Turkey Waddle Benson",
					title: "The Rent is Due and He Has No Job",
				},
			],
		},
	],
};
