import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Eddie Izzard"
	| "Greg Proops"
	| "Ryan Stiles"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-07",
	airdate: "1995-09-08",
	host: "Clive Anderson",
	performers: ["Stephen Frost", "Eddie Izzard", "Greg Proops", "Ryan Stiles"],
	games: [
		{
			name: "Remote Control",
			topic: "Lobsters",
			performers: [
				{
					name: "Stephen Frost",
					quirk: "_The Bill_",
				},
				{
					name: "Eddie Izzard",
					quirk: "_Newsnight_",
				},
				{
					name: "Greg Proops",
					quirk: "Game show",
				},
				{
					name: "Ryan Stiles",
					quirk: "Cookery show",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Stephen Frost", "Eddie Izzard"],
			scene:
				"Eddie is Hannibal talking to his elephant-keeper, played by Stephen",
			styles: [
				"_Ivor the Engine_",
				"French with subtitles",
				"_Captain Scarlet_",
			],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene: "Forgotten to do something",
		},
		{
			name: "Old Job, New Job",
			performers: ["Ryan Stiles", "Eddie Izzard"],
			oldJobPerformers: ["Stephen Frost"],
			scene:
				"Ryan is a dental nurse and Eddie is a patient, and Stephen will come in and he's the dentist",
			oldJob: "Stephen used to be a builder",
		},
		{
			name: "News Report",
			interviewer: {
				name: "Greg Proops",
				alternateName: "Red Whenexcited",
			},
			expert: {
				name: "Eddie Izzard",
				alternateName: "Dr. Pengo",
			},
			reporter: {
				name: "Stephen Frost",
				alternateName: "Pond Scumley",
			},
			variousCharacters: "Ryan Stiles",
			topic: "Gulliver in Lilliput",
		},
		{
			name: "Props",
			pairs: [
				["Greg Proops", "Ryan Stiles"],
				["Stephen Frost", "Eddie Izzard"],
			],
		},
		{
			name: "Sound Effects",
			performers: ["Ryan Stiles", "Greg Proops"],
			sounds: "Recorded sound effects",
			scene: "Lifeguards on the beach",
		},
		{
			name: "Film Trailer",
			narrator: "Greg Proops",
			title: "_The Creature from Essex_",
		},
		{
			name: "Moving People",
			performers: ["Stephen Frost", "Ryan Stiles"],
			moversFromTheAudience: ["Carolyn", "Nicki"],
			scene: "Two firemen at the scene of a fire",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Eddie Izzard",
					quirk: "Child come to play in playground",
				},
				{
					name: "Stephen Frost",
					quirk: "Getting on a tube train",
				},
				{
					name: "Ryan Stiles",
					quirk: "Circus parade going by",
				},
			],
		},
	],
};
