import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-01",
	airdate: "2005-01-17",
	productionNumber: "296744-7001",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "Shortage of ceramic",
			performers: [
				{
					name: "Brad Sherwood",
					superpower: "Tom Arnold",
				},
				{
					name: "Ryan Stiles",
					superpower: "The Guy Who Channels the Spirits of Farm Animals",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Streaker",
				},
				{
					name: "Wayne Brady",
					superpower: "Man Who Mimics Everyone While Under Caffeine",
				},
			],
		},
		{
			name: "Film Dub",
			performers: [
				"Brad Sherwood",
				"Wayne Brady",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scene: "One day at the doctor's office",
			film: "_Night of the Blood Beast_ (1958)",
		},
		{
			name: "Infomercial",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			problem: "Body odor",
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"High-energy android who keeps running out of power and recharges by kissing someone's head",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Fiery male Russian ballet dancer upset at having to perform with a substandard female cast",
				},
				{
					name: "Ryan Stiles",
					quirk: "Series of the world's dumbest criminals caught on tape",
				},
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Brad Sherwood"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the President_",
			songs: [
				{
					style: "Talking Heads",
					title: "That White House is Big",
				},
				{
					style: "Swing",
					title: "I'm Lyin', He's Lyin', We're All Lyin'",
				},
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			to: "Jodie, not Jordie, from the audience",
			song: "When I Touch Your Kangaroo",
		},
	],
};
