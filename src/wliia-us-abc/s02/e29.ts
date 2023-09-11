import { type Episode } from "../../types/episode";

export const e29: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 29,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-29",
	airdate: "2000-03-23",
	productionNumber: "296718-232",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Roommates from _The Real World_",
				},
				{
					name: "Colin Mochrie",
					quirk: "Soap opera doctor desperate not to lose another patient",
				},
				{
					name: "Ryan Stiles",
					quirk: "Nervous old woman accidentally boarding a roller coaster",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Charlie, a maintenance man for a musical company",
			styles: ["TLC"],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "A bickering married couple",
				},
				{
					name: "Colin Mochrie",
					quirk: "A fish from birth to fish stick in 30 seconds",
				},
				{
					name: "Ryan Stiles",
					quirk: "His nipples are chained to the host's hands",
				},
			],
		},
		{
			name: "Improbable Mission",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Greg Proops",
			mission: "The laundry",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			musical: "_The Monkeys Attack_",
			song: "My Banana, Your Banana",
		},
	],
};
