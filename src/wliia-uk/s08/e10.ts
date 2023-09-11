import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Josie Lawrence"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-10",
	airdate: "1996-09-13",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Josie Lawrence",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["On a space station", "red alert has just been sounded"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Ryan Stiles", "Josie Lawrence"],
			scene: "Josie's telling Ryan that she's pregnant",
			styles: ["Muppets", "James Bond", "1950s health film"],
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Impossible",
			agents: ["Ryan Stiles", "Colin Mochrie"],
			voiceOnTape: "Stephen Frost",
			mission: "Cleaning the toilet",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Stephen Frost", "Josie Lawrence"],
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Josie Lawrence", "Colin Mochrie"],
			translators: ["Stephen Frost", "Ryan Stiles"],
			languages: ["Spanish"],
			title: "_Jack and the Cucumber_",
		},
		{
			name: "Party Quirks",
			host: "Stephen Frost",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Thinks Stephen is a wild horse",
				},
				{
					name: "Colin Mochrie",
					quirk: "Wins lottery and then loses ticket",
				},
				{
					name: "Ryan Stiles",
					quirk: "Going through puberty in 15 seconds",
				},
			],
		},
		{
			name: "Psychiatrist",
			psychiatrist: "Josie Lawrence",
			musician: "Richard Vranch",
			performers: [
				{
					name: "Stephen Frost",
					quirk: "Thinks he's a peanut in France",
				},
				{
					name: "Colin Mochrie",
					quirk: "Scared of psychiatrists in Germany",
				},
				{
					name: "Ryan Stiles",
					quirk: "In love with a nurse in Mexico",
				},
			],
		},
	],
};
