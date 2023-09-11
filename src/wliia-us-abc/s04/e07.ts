import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-07",
	airdate: "2001-10-04",
	productionNumber: "296722-315",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Bad-tempered short order cook",
				},
				{
					name: "Colin Mochrie",
					quirk: "Turning into a cock-fighting rooster",
				},
				{
					name: "Ryan Stiles",
					quirk: "Desperate soldier in a foxhole during battle",
				},
			],
		},
		{
			name: "Title Sequence",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			sitcom: "_Tyson and Lincoln_",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Strange titles for celebrity autobiographies",
				"Strange items on sale at the prison gift shop",
				"Words that sound dirty, but aren't",
				"Shows that didn't even make it to UPN",
				"America's funniest lethal home videos",
				"Odd choices for a presidential running mate",
				"Pick up lines of game show hosts",
				"Bad things to say to your future in-laws",
			],
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Television that keeps changing channels",
				},
				{
					name: "Colin Mochrie",
					quirk: "Insatiable mosquito that gets drunk on blood",
				},
				{
					name: "Ryan Stiles",
					quirk: "Talking roadkill coming back to haunt the host",
				},
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: "Laura and Linda",
			musical: "_Quicksand_",
			song: "That Sinking Feeling",
		},
		{
			name: "Hoedown",
			performers: [
				"Brad Sherwood",
				"Drew Carey",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Laura Hall"],
			about:
				"[Family reunion](https://whoselineisitanyway.fandom.com/wiki/Family_Reunion_Hoedown_(US_4-07))",
		},
	],
};
