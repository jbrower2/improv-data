import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Karen Maruyama"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-02",
	airdate: "1997-07-17",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Karen Maruyama", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Superheroes",
			crisis: "Perishing elastic",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Mr. Muscle and Mr. Zimmer Man rolled into one",
				},
				{
					name: "Ryan Stiles",
					superpower: "Seductive-Eating Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "Incoherent Boy",
				},
				{
					name: "Karen Maruyama",
					superpower: "Shampoo Commercial Girl",
				},
			],
		},
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Karen Maruyama",
					quirk: "A call girl",
				},
				{
					name: "Colin Mochrie",
					quirk: "First time nudist",
				},
				{
					name: "Ryan Stiles",
					quirk: "Thinks Greg is the ugliest woman in the world",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Chat up line"],
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Karen Maruyama"],
			lastBody: "Greg Proops",
			scene:
				"A boyfriend and a girlfriend on a beach when a muscular rival comes along",
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Impossible",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Greg Proops",
			mission: "Catching hairy caterpillars",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Karen Maruyama",
					quirk: "Infomercial for exercise equipment",
				},
				{
					name: "Colin Mochrie",
					quirk: "Keeps waking up during an operation",
				},
				{
					name: "Ryan Stiles",
					quirk: "Dog in a car",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Giving birth](https://whoselineisitanyway.fandom.com/wiki/Giving_Birth_Hoedown)",
		},
	],
};
