import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-01",
	airdate: "1996-07-12",
	host: "Clive Anderson",
	performers: ["Stephen Frost", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["A shipwreck"],
		},
		{
			name: "Newsflash",
			anchormen: ["Greg Proops", "Colin Mochrie"],
			fieldReporter: "Ryan Stiles",
			onTheGreenScreen: "Mongol hordes",
		},
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "German U-boat commander",
				},
				{
					name: "Colin Mochrie",
					quirk: "A fly",
				},
				{
					name: "Ryan Stiles",
					quirk: "On verge of nervous breakdown",
				},
			],
		},
		{
			name: "Hey, You Down There!",
			narrator: "Greg Proops",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			topic: "How to fly a light plane",
		},
		{
			name: "Hats",
			topic: "World's worst ad campaign",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Stephen Frost", "Greg Proops"],
			],
		},
		{
			name: "Number of Words",
			scene: "In a Wild West saloon",
			performers: [
				{
					name: "Stephen Frost",
					quirk: "Sheriff",
					words: 4,
				},
				{
					name: "Greg Proops",
					quirk: "Barman",
					words: 2,
				},
				{
					name: "Colin Mochrie",
					quirk: "Troublemaker",
					words: 1,
				},
				{
					name: "Ryan Stiles",
					quirk: "Cowboy",
					words: 3,
				},
			],
		},
		{
			name: "Old Job, New Job",
			performers: ["Colin Mochrie", "Ryan Stiles", "Stephen Frost"],
			scene: "A patient and a nurse, joined by a nurse",
			oldJob: "Stephen used to be a farmer",
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Stephen Frost"],
			lastBody: "Greg Proops",
			scene: "Seeking father's permission to marry",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Bungee jumping](https://whoselineisitanyway.fandom.com/wiki/Bunjee_Jumping_Hoedown)",
		},
	],
};
