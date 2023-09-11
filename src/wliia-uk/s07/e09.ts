import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Caroline Quentin"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-09",
	airdate: "1995-09-22",
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
			alternateName: "Film and Theater Styles",
			performers: ["Caroline Quentin", "Josie Lawrence"],
			scene: "The first two women to cross the Antarctic",
			styles: [
				"Cliff Richard movie",
				"_Thelma & Louise_",
				"_Gone with the Wind_",
				"Japanese dinosaurs",
				"PR film",
			],
		},
		{
			name: "Stand Sit Lie",
			performers: ["Josie Lawrence", "Colin Mochrie", "Ryan Stiles"],
			scene: "At the tattoo parlor",
		},
		{
			name: "Press Conference",
			publicFigure: "Caroline Quentin",
			topic: "First female pope",
		},
		{
			name: "Duet",
			singers: ["Josie Lawrence", "Caroline Quentin"],
			musicians: ["Richard Vranch"],
			about: "A beached whale",
			styles: ["Love song"],
		},
		{
			name: "Hats",
			topic: "World's worst dating agency video",
		},
		{
			name: "Props",
			pairs: [
				["Caroline Quentin", "Ryan Stiles"],
				["Josie Lawrence", "Colin Mochrie"],
			],
		},
		{
			name: "Party Quirks",
			host: "Caroline Quentin",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "In a tampon ad",
				},
				{
					name: "Colin Mochrie",
					quirk: "A flu germ",
				},
				{
					name: "Ryan Stiles",
					quirk: "Victim of voodoo attack",
				},
			],
		},
		{
			name: "Prison Visitor",
			alternateName: "Prison Scene",
			visitor: "Josie Lawrence",
			prisoners: [
				{
					name: "Colin Mochrie",
					crime: "In Brazil, he's stolen pants",
				},
				{
					name: "Caroline Quentin",
					crime: "In Italy, she's murdered George",
				},
				{
					name: "Ryan Stiles",
					crime: "In Jamaica, caught red-handed with a prostitute",
				},
			],
		},
	],
};
