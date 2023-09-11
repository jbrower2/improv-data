import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-07",
	airdate: "1999-10-21",
	productionNumber: "296718-202",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Monster truck pull announcer",
				},
				{
					name: "Colin Mochrie",
					quirk: "The winning contestant on Miss World",
				},
				{
					name: "Ryan Stiles",
					quirk: "Turning into King Kong",
				},
			],
		},
		{
			name: "Superheroes",
			crisis: "Bad Hair Day",
			performers: [
				{
					name: "Brad Sherwood",
					superpower: "Prissy Boy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Captain Frisks-a-Lot",
				},
				{
					name: "Colin Mochrie",
					superpower: "The Bitter Divorce Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "Dirty Dancing Kid",
				},
			],
		},
		{
			name: "Ballad of",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Leonard, the Lawyer",
			style: "Country",
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Ryan Stiles", "Colin Mochrie"],
			scene: "Cleaning up after an auto race",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Brad Sherwood"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Golf_",
			songs: [
				{
					style: "Vaudeville",
					title: "Grab My Putter",
				},
				{
					style: "Beach hit",
					title: "Fore",
				},
				{
					style: "Lounge",
					title: "Hey, a Squirrel Chewed My Bag",
				},
			],
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Colin Mochrie", "Ryan Stiles", "Drew Carey"],
			scene:
				"Ryan is excited about the blind date that Drew set him up with, until she arrives",
			startingLetter: "J",
		},
	],
};
