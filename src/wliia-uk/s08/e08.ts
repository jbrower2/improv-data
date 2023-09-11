import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-08",
	airdate: "1996-08-30",
	host: "Clive Anderson",
	performers: ["Stephen Frost", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			groups: [
				{
					performers: ["Ryan Stiles", "Colin Mochrie"],
					scene: "A nude model and sculptor",
					styles: ["Slapstick", "James Bond", "_Star Trek_", "_The Fog_"],
				},
				{
					performers: ["Stephen Frost", "Greg Proops"],
					scene: "Sharing a prison cell",
					styles: [
						"_Godzilla_",
						"Shakespeare",
						"_Wallace & Gromit_",
						"Romantic love story",
					],
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A passionate date in a drive-in burger bar",
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Impossible",
			agents: ["Ryan Stiles", "Colin Mochrie", "Stephen Frost"],
			voiceOnTape: "Greg Proops",
			mission: "Dressing themselves",
		},
		{
			name: "Home Shopping",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			items: ["Yesterday's newspaper", "A cup with a hole in it", "John Major"],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Greg Proops", "Stephen Frost"],
			scene: "Moving Ryan's desk",
			film: "_D.O.A._ (1950)",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "Nice cop / nasty cop",
				},
				{
					name: "Colin Mochrie",
					quirk: "In a haemorrhoid advert",
				},
				{
					name: "Ryan Stiles",
					quirk: "Agent at a Hollywood party",
				},
			],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Daniela", "Liam"],
			scene: "A spy ski chase",
		},
	],
};
