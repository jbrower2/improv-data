import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Stephen Colbert"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-09",
	airdate: "2006-03-22",
	productionNumber: "296751-8013",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Stephen Colbert",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Superheroes",
			crisis: "Out of clean underwear",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Underwear Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Totally Worships Me Boy",
				},
				{
					name: "Wayne Brady",
					superpower: "The Chippendale Kid",
				},
				{
					name: "Stephen Colbert",
					superpower: "Angry New York Cop Man",
				},
			],
		},
		{
			name: "Scene to Music",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"In a very busy restaurant, a customer complains to the chef about his meal",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Toby, who plays the violin",
			styles: ["Michael Jackson"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Stephen Colbert"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen:
				"_Invasion of the Neptune Men_ (1961) (Alien spaceships shooting lasers at people and buildings on the ground)",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Bend",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Colin and Wayne are an angry couple returning their car to Ryan's used car lot",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Wayne Brady", "Stephen Colbert"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["German"],
			film: "_Don't Touch My Sauerkraut_",
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
				"Ryan is a nervous teenage girl getting ready for the prom, and Drew is her girlfriend, helping her prepare",
		},
	],
};
