import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Chip Esten"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-05",
	airdate: "1992-02-21",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Ryan Stiles", "Chip Esten", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Chip Esten", "Tony Slattery"],
					scene: "A bank holdup",
					styles: [
						"Biblical epic",
						"Shakespeare",
						"Amateur dramatics",
						"Western",
					],
				},
				{
					performers: ["Ryan Stiles", "Greg Proops"],
					scene: "Two men stuck in a lift",
					styles: [
						"Tarzan",
						"Disaster movie",
						"Batman & Robin",
						"Science fiction",
					],
				},
			],
		},
		{
			name: "News Report",
			reporter: {
				name: "Greg Proops",
				alternateName: "Packed Nicely",
			},
			expert: {
				name: "Tony Slattery",
				alternateName: "Professor Omar Weaselhead",
			},
			inTheField: {
				name: "Chip Esten",
				alternateName: "Chip Stunkley",
			},
			variousCharacters: "Ryan Stiles",
			topic: "Snow White",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene: "A man in a hurry",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Two flies on a date",
				"Breaking very bad news to the Emperor",
				"Locked in the freezer",
				"Trampolining on the moon",
				"King and food-taster",
				"Two practical-joking grave diggers",
				"Two lovers in a hot tub realising something",
			],
		},
		{
			name: "Props",
			pairs: [
				["Chip Esten", "Ryan Stiles"],
				["Tony Slattery", "Greg Proops"],
			],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Chip Esten",
					quirk: "Thinks he's under water",
				},
				{
					name: "Greg Proops",
					quirk: "He's obsessed by gadgets",
				},
				{
					name: "Ryan Stiles",
					quirk: "He's made of springs",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Tony Slattery",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Having breakfast",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Feeding the cat](https://whoselineisitanyway.fandom.com/wiki/Feeding_the_Cat_Hoedown)",
		},
	],
};
