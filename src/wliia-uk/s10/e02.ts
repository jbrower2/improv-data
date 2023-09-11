import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Phil LaMarr"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-02",
	airdate: "1998-04-29",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Phil LaMarr", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Phil LaMarr",
					quirk: "Boxer at a press conference",
				},
				{
					name: "Colin Mochrie",
					quirk: 'Sitting on the geyser "Old Faithful"',
				},
				{
					name: "Ryan Stiles",
					quirk: "A conceited nudist",
				},
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Batman and Robin",
			secretLocation: "In the Batmobile",
		},
		{
			name: "Quiz Show",
			host: "Greg Proops",
			title: "_What's My Sin?_",
		},
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			topic: "Having Clive Anderson's love child",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Phil LaMarr"],
			],
		},
		{
			name: "Multiple Personalities",
			performers: ["Colin Mochrie", "Ryan Stiles", "Greg Proops"],
			props: [
				{
					prop: "Torch",
					personality: "John Wayne",
				},
				{
					prop: "Petrol can",
					personality: "Elvis Presley",
				},
				{
					prop: "Map",
					personality: "Captain Kirk",
				},
			],
			scene: "A car broken down at night",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Fun Afterdark",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Jockey in a race who cannot beat Greg",
			},
			sports: {
				name: "Phil LaMarr",
				quirk: "James Brown",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Keeps getting hit by water cannon",
			},
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Colin](https://whoselineisitanyway.fandom.com/wiki/Colin_Hoedown)",
		},
	],
};
