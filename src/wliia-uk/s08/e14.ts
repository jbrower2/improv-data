import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Clive Anderson"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Ardal O'Hanlon"
	| "Niall Ashdown"
	| "Josie Lawrence"
	| "Stephen Frost"
	| "Rory Bremner"
	| "Richard Vranch"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-14",
	airdate: "1996-12-13",
	host: "Clive Anderson",
	performers: [
		"Colin Mochrie",
		"Greg Proops",
		"Ryan Stiles",
		"Ardal O'Hanlon",
		"Niall Ashdown",
		"Josie Lawrence",
		"Stephen Frost",
		"Rory Bremner",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			performers: [
				"Colin Mochrie",
				"Greg Proops",
				"Ryan Stiles",
				"Ardal O'Hanlon",
			],
			scenes: ["At the police station"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "A row erupts between two guys checking the roller coaster",
			styles: ["Elvis Presley movie", "_Pink Panther_", "Quentin Tarantino"],
		},
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Niall Ashdown",
					quirk: "Show jumping commentator",
				},
				{
					name: "Colin Mochrie",
					quirk: "Hypochondriac",
				},
				{
					name: "Ryan Stiles",
					quirk: "Obsessed by erotica",
				},
			],
		},
		{
			name: "Psychiatrist",
			psychiatrist: "Josie Lawrence",
			musician: "Richard Vranch",
			performers: [
				{
					name: "Ryan Stiles",
					quirk: "In love with a sheep in Jamaica",
				},
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two priests in a church",
			secretLocation: "In the confessional",
		},
		{
			name: "Hats",
			performers: [
				"Josie Lawrence",
				"Stephen Frost",
				"Ryan Stiles",
				"Colin Mochrie",
			],
			topic: "Worst possible examples of a video made for a dating agency",
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "A door-to-door salesman, Colin, and a housewife, Ryan",
		},
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			journalists: ["Ryan Stiles", "Rory Bremner", "Greg Proops"],
			topic: "Spent 6 months living inside a whale",
		},
		{
			name: "News Report",
			interviewer: {
				name: "Greg Proops",
				alternateName: "Long Lovingly",
			},
			expert: {
				name: "Colin Mochrie",
				alternateName: "Jim",
			},
			reporter: {
				name: "Ardal O'Hanlon",
				alternateName: "Dack Nangley",
			},
			variousCharacters: "Ryan Stiles",
			topic: "Pinocchio",
		},
		{
			name: "Helping Hands",
			performers: [
				"Colin Mochrie",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Two Antarctic explorers at the end of their tether",
		},
		{
			name: "Hoedown",
			performers: [
				"Stephen Frost",
				"Josie Lawrence",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Richard Vranch"],
			about:
				"[Grandmothers](https://whoselineisitanyway.fandom.com/wiki/Grandmothers_Hoedown)",
		},
	],
};
