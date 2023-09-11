import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-04",
	airdate: "2005-11-07",
	productionNumber: "296751-8004",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Hip-hop radio DJ",
				},
				{
					name: "Colin Mochrie",
					quirk: "80 year-old who's taken way too much aphrodisiac",
				},
				{
					name: "Ryan Stiles",
					quirk: "Drill sergeant",
				},
			],
		},
		{
			name: "Fashion Models",
			commentators: ["Greg Proops"],
			models: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			job: "Race car driver",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Wayne Brady", "Greg Proops"],
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "Zombies",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Daredevil motorcycle stunt rider",
				},
				{
					name: "Colin Mochrie",
					quirk: "Evolving from primeval ooze to man",
				},
				{
					name: "Ryan Stiles",
					quirk: "_Rocky_ in 30 seconds",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Midterms](https://whoselineisitanyway.fandom.com/wiki/Midterm_Hoedown)",
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is going to propose to Drew, his girlfriend, during a romantic dinner together",
		},
	],
};
