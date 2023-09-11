import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Catherine O'Hara"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-06",
	airdate: "1998-05-27",
	host: "Clive Anderson",
	performers: [
		"Greg Proops",
		"Catherine O'Hara",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Catherine O'Hara",
			guests: [
				{
					name: "Greg Proops",
					quirk: "An alien invader is speaking through him",
				},
				{
					name: "Colin Mochrie",
					quirk: "Horny Tarzan",
				},
				{
					name: "Ryan Stiles",
					quirk: "A compulsive liar",
				},
			],
		},
		{
			name: "Home Shopping",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			items: [
				"A book of someone else's opinions",
				"Indigestion simulator pills",
				"A rusty bathtub",
			],
		},
		{
			name: "Hats",
			topic: "World's worst dating agency video",
		},
		{
			name: "Daytime Talk Show",
			host: "Greg Proops",
			guests: ["Catherine O'Hara", "Ryan Stiles"],
			audienceMembers: ["Colin Mochrie"],
			topic: "Cinderella",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Catherine O'Hara"],
				["Greg Proops", "Colin Mochrie"],
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Catherine O'Hara", "Colin Mochrie"],
			translators: ["Ryan Stiles", "Greg Proops"],
			languages: ["Hungarian"],
			film: "_The Greatest Banana_",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Catherine O'Hara",
					quirk: "Just can't remember names",
				},
				{
					name: "Colin Mochrie",
					quirk: "Trying to go round a fairground in record time",
				},
				{
					name: "Ryan Stiles",
					quirk: "Everything he touches becomes enormous",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Coffee and other related drinks](https://whoselineisitanyway.fandom.com/wiki/Coffee_and_Other_Related_Drinks_Hoedown)",
		},
	],
};
