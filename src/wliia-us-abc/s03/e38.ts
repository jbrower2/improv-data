import { type Episode } from "../../types/episode.js";

export const e38: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 38,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-38",
	airdate: "2001-06-14",
	productionNumber: "296722-308",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Lars Ofthemohicans",
			},
			coAnchor: {
				name: "Kathy Greenwood",
				alternateName: "Fay Kitnightly",
				quirk:
					"Has had one drink too many at lunch and has lost all her inhibitions",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Bucky Ozark",
				quirk:
					"Ugly hillbilly desperate to get someone to accept his marriage proposal",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Bud Ugly",
				quirk: "Indiana Jones in the middle of a hair-raising quest",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Chris, who reviews video games",
			styles: ["Britney Spears"],
		},
		{
			name: "Action Replay",
			actors: ["Wayne Brady", "Kathy Greenwood"],
			reEnacters: ["Ryan Stiles", "Colin Mochrie"],
			originalScene: "Newlyweds fight and make up while doing the laundry",
		},
		{
			name: "Party Quirks",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "The more he is attracted to someone, the faster he talks",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Increasingly frustrated french pig hunting everywhere for truffles",
				},
				{
					name: "Ryan Stiles",
					quirk: "Carol Channing whose head keeps getting stuck to things",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Wrestler](https://whoselineisitanyway.fandom.com/wiki/Wrestler_Hoedown)",
		},
	],
};
