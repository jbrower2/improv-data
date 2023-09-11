import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Clive Anderson"
	| "Niall Ashdown"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-09",
	airdate: "1996-09-06",
	host: "Clive Anderson",
	performers: [
		"Niall Ashdown",
		"Stephen Frost",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["In a Scout camp"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Colin's just discovered his goldfish are missing and suspects that Ryan, his neighbor, might have had something to do with it",
			styles: [
				"American sitcom",
				"_The Addams Family_",
				"Science fiction",
				"Runaway train",
			],
		},
		{
			name: "Song Styles",
			singers: ["Niall Ashdown"],
			musicians: ["Richard Vranch"],
			about: "Katherine, a secretary",
			styles: ["Love song"],
		},
		{
			name: "Number of Words",
			scene: "In a hospital",
			performers: [
				{
					name: "Ryan Stiles",
					quirk: "The surgeon",
					words: 1,
				},
				{
					name: "Stephen Frost",
					quirk: "Ryan's assistant",
					words: 5,
				},
				{
					name: "Niall Ashdown",
					quirk: "Some sort of nurse",
					words: 3,
				},
				{
					name: "Colin Mochrie",
					quirk: "A patient",
					words: 2,
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Stephen Frost", "Niall Ashdown"],
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Cowboys",
		},
		{
			name: "Film Dub",
			performers: ["Stephen Frost", "Ryan Stiles"],
			scene:
				"Ryan is the Chief of Police, who's dressing down the other members of his force",
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Impossible",
			agents: ["Ryan Stiles", "Niall Ashdown", "Stephen Frost"],
			voiceOnTape: "Colin Mochrie",
			mission: "Washing up",
		},
		{
			name: "Party Quirks",
			host: "Stephen Frost",
			guests: [
				{
					name: "Niall Ashdown",
					quirk: "On the Dambusters raid",
				},
				{
					name: "Colin Mochrie",
					quirk: "Has 15 seconds to live",
				},
				{
					name: "Ryan Stiles",
					quirk: "Having an orgasm",
				},
			],
		},
		{
			name: "Hoedown",
			about:
				"[Women](https://whoselineisitanyway.fandom.com/wiki/Women_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
