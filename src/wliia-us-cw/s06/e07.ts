import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-07",
	airdate: "2018-07-09",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Shopping channel hostess who thinks people are the different beds she's selling",
				},
				{
					name: "Colin Mochrie",
					quirk: "The complete life cycle of a salmon",
				},
				{
					name: "Ryan Stiles",
					quirk: "Cute puppy who becomes vicious when he sees something weird",
				},
			],
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Wayne Brady", "Jonathan Mangum", "Colin Mochrie"],
			phoneDonors: ["Lily", "Danny"],
			scene:
				"Colin is the owner of Jurassic Park who's summoned park rangers Wayne and Jonathan to deal with escaping dinosaurs",
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit to help rid oneself of body odor",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Weird things to see or hear on a nature show",
				"Facts you wish were true",
				"Unusual things to advertise in a high-energy local commercial",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Wayne Brady", "Jonathan Mangum"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Partygoers",
		},
		{
			name: "Hoedown",
			about:
				"[Marriage](https://whoselineisitanyway.fandom.com/wiki/Marriage_Hoedown)",
			musicians: ["Laura Hall"],
		},
	],
};
