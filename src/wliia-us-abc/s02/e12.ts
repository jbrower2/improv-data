import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anna Wanselius"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-12",
	airdate: "1999-11-11",
	productionNumber: "296718-211",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Female American Gladiator",
				},
				{
					name: "Colin Mochrie",
					quirk: "Makes animal noises whenever he gets turned on",
				},
				{
					name: "Ryan Stiles",
					quirk: "Angry farmer looking for person who slept with his daughter",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
			about: "Derek, who runs a warehouse in the diesel industry",
			styles: ["Village People"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Chip Esten"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Party Quirks",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Early movie footage of _King Kong vs. Godzilla_",
				},
				{
					name: "Colin Mochrie",
					quirk: "Has a personal vendetta against the neighbors downstairs",
				},
				{
					name: "Ryan Stiles",
					quirk: "Series of crunching football tackles in slow motion",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Cop shows](https://whoselineisitanyway.fandom.com/wiki/Cop_Show_Hoedown)",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			musical: "_Worms_",
			song: "You Know How to Wiggle",
		},
	],
};
