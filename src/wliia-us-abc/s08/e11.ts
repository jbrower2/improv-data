import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-11",
	airdate: "2006-03-04",
	productionNumber: "296751-8019",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Questions Only",
			scenes: ["On an international flight"],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Ryan is Tarzan and Colin is Jane",
			secretLocation: "In the loincloth",
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Sarah, an auditor",
			styles: ["Pop ballad"],
		},
		{
			name: "Backwards Scene",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene:
				'Ryan\'s visiting the doctor, Brad is the doctor and Colin is the nurse, beginning with Ryan saying, "Goodbye"',
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Android servant malfunctioning",
				},
				{
					name: "Colin Mochrie",
					quirk: "Criminal on the run using all modes of transportation",
				},
				{
					name: "Ryan Stiles",
					quirk: "Mouse narrowly avoiding being killed",
				},
			],
		},
		{
			name: "Daytime Talk Show",
			host: "Brad Sherwood",
			guests: ["Wayne Brady", "Colin Mochrie"],
			audienceMembers: ["Ryan Stiles"],
			topic: "Cinderella",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Snoring](https://whoselineisitanyway.fandom.com/wiki/Snoring_Hoedown)",
		},
	],
};
