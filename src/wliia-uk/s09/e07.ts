import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "George Wendt"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-07",
	airdate: "1997-08-21",
	host: "Clive Anderson",
	performers: ["Greg Proops", "George Wendt", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Ryan Stiles", "George Wendt"],
			scene:
				"Ryan is a scientist and he's called his friend George 'round to help test his time machine",
			styles: [
				"Oprah Winfrey",
				"_Sesame Street_",
				"Dubbed martial arts",
				"Horror",
			],
		},
		{
			name: "Superheroes",
			crisis: "Lack of jelly babies",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Super Teddy Bear",
				},
				{
					name: "Ryan Stiles",
					superpower: "Mr. Smooth",
				},
				{
					name: "Colin Mochrie",
					superpower: "The Disco Kid",
				},
				{
					name: "George Wendt",
					superpower: "Talks Too Loud About His Personal Problems Man",
				},
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Geppetto and Pinocchio",
			secretLocation: "In the left nostril",
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Greg Proops", "Colin Mochrie"],
			scene: "A dangerous mission",
		},
		{
			name: "World's Worst",
			scenes: ["Person to share a flat with"],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["George Wendt", "Greg Proops"],
			],
		},
		{
			name: "Three of a Kind",
			performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles"],
			scene: "In the launderette",
			job: "TV evangelists",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "George Wendt",
					quirk: "_Gone with the Wind_ in 30 seconds",
				},
				{
					name: "Colin Mochrie",
					quirk: "Testing out rodeo horses of varying sizes",
				},
				{
					name: "Ryan Stiles",
					quirk: "A fly caught between two windows",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Space travel](https://whoselineisitanyway.fandom.com/wiki/Space_Travel_Hoedown_(UK_9-07))",
		},
	],
};
