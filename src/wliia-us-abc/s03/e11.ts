import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-11",
	airdate: "2000-11-23",
	productionNumber: "296722-340",
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
					quirk: "Movie trailer voiceover",
				},
				{
					name: "Colin Mochrie",
					quirk: "Terrified turkey just before Thanksgiving",
				},
				{
					name: "Ryan Stiles",
					quirk: "A pair of jealous redneck twins",
				},
			],
		},
		{
			name: "Multiple Personalities",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			props: [
				{
					prop: "Map",
					personality: "Elvis Presley",
				},
				{
					prop: "Canteen",
					personality: "John Wayne",
				},
				{
					prop: "Binoculars",
					personality: "Beavis and Butthead",
				},
			],
			scene: "Lost in the mall",
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Wayne Brady"],
			],
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Greg Proops"],
			audienceMember: "Sarah",
			scene:
				"In _Braveheart_, Ryan's the wicked lord who's claimed the right to Braveheart's wife, Greg, as Braveheart, comes to her rescue",
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "Beauty salon",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit and Bend",
			performers: ["Colin Mochrie", "Ryan Stiles", "Drew Carey"],
			scene:
				"A rival gangster has come to make peace with the Godfather, Ryan, and his violent son, Colin",
		},
	],
};
