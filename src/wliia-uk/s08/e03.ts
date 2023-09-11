import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Caroline Quentin"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-03",
	airdate: "1996-07-26",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Caroline Quentin",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Josie Lawrence", "Caroline Quentin"],
			scene:
				"Josie is the first person to fly to Neptune and is having problems with her android, played by Caroline",
			styles: ["_Baywatch_", "70s cop show", "Restoration comedy"],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two members of an orchestra",
			secretLocation: "In a violin",
		},
		{
			name: "Let's Make a Date",
			host: "Josie Lawrence",
			guests: [
				{
					name: "Caroline Quentin",
					quirk: "Enthusiastic Girl Guide leader",
				},
				{
					name: "Colin Mochrie",
					quirk: "Fancies the other contestants",
				},
				{
					name: "Ryan Stiles",
					quirk: "Outraged tennis player disputing decisions",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Josie Lawrence", "Caroline Quentin"],
			musicians: ["Richard Vranch"],
			about: "Spanner",
			styles: ["Blues"],
		},
		{
			name: "Hats",
			topic: "World's worst videos made for a dating agency",
		},
		{
			name: "Picture",
			performers: ["Caroline Quentin", "Ryan Stiles"],
			scene: "A marriage breaking up",
		},
		{
			name: "Party Quirks",
			host: "Caroline Quentin",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "In a deodorant ad",
				},
				{
					name: "Colin Mochrie",
					quirk: "History of the world",
				},
				{
					name: "Ryan Stiles",
					quirk: "Food going through the body",
				},
			],
		},
		{
			name: "Moving People",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			moversFromTheAudience: ["Fiona", "Jen"],
			scene: "Two highly-strung chefs having a bit of a dispute in the kitchen",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Smelly feet and bad breath](https://whoselineisitanyway.fandom.com/wiki/Smelly_Feet_and_Bad_Breath_Hoedown)",
		},
	],
};
