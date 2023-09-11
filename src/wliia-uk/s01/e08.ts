import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Clive Anderson"
	| "Richard Kaplan"
	| "Griff Rhys Jones"
	| "Paul Merton"
	| "John Sessions"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-08",
	airdate: "1988-11-11",
	host: "Clive Anderson",
	performers: [
		"Richard Kaplan",
		"Griff Rhys Jones",
		"Paul Merton",
		"John Sessions",
	],
	games: [
		{
			name: "Authors",
			title: "_Kurt Waldheim's War Diaries_",
			performers: [
				{
					name: "Richard Kaplan",
					author: "Raymond Chandler",
				},
				{
					name: "Griff Rhys Jones",
					author: "John Milton",
				},
				{
					name: "Paul Merton",
					author: "Sunday sport",
				},
				{
					name: "John Sessions",
					author: "Friedrich Nietzsche",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Paul Merton", "Richard Kaplan"],
					scene: "A big businessman buying out a little sandwich shop",
					styles: ["Spaghetti western", "_Monty Python_", "Horror"],
				},
				{
					performers: ["Griff Rhys Jones", "John Sessions"],
					scene:
						"John is explaining to Griff how to operate the nuclear button",
					styles: [
						"Laurel & Hardy",
						"Arthur Miller",
						"Whodunnit",
						"Swedish erotica",
					],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be President of the United States of America"],
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Griff Rhys Jones"],
				["Paul Merton", "Richard Kaplan"],
			],
		},
		{
			name: "Remote Control",
			topic: "Traffic",
			performers: [
				{
					name: "Richard Kaplan",
					quirk: "American game-show host",
				},
				{
					name: "Griff Rhys Jones",
					quirk: "One man and his dog",
				},
				{
					name: "Paul Merton",
					quirk: "American cop show",
				},
				{
					name: "John Sessions",
					quirk: "_Noggin the Nog_",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Richard Kaplan",
					quirk: "From _Mission Impossible_",
				},
				{
					name: "Griff Rhys Jones",
					quirk: "Bad ventriloquist",
				},
				{
					name: "John Sessions",
					quirk: "From the future",
				},
			],
		},
	],
};
