import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-03",
	airdate: "1995-08-11",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Colin Mochrie",
		"Ryan Stiles",
		"Tony Slattery",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two people in a canoe in the Amazon",
			styles: [
				"_Mission Impossible_",
				"_LA Law_",
				"_Star Trek_",
				"Dinosaur movie",
			],
		},
		{
			name: "Animals",
			performers: ["Stephen Frost", "Tony Slattery", "Ryan Stiles"],
			scene: "_Brookside_",
			animals: "Dogs",
		},
		{
			name: "Old Job, New Job",
			performers: ["Ryan Stiles", "Colin Mochrie", "Stephen Frost"],
			scene: "A surgeon and a patient joined by another surgeon",
			oldJob: "Stephen used to be a hairdresser",
		},
		{
			name: "Press Conference",
			publicFigure: "Tony Slattery",
			topic: "First man to make love in space",
		},
		{
			name: "Hey, You Down There!",
			narrator: "Stephen Frost",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			topic: "Gardening",
		},
		{
			name: "World's Worst",
			scenes: ["Ad campaign"],
		},
		{
			name: "Courtroom Scene",
			alternateName: "Courtroom",
			judge: "Colin Mochrie",
			lawyer: "Stephen Frost",
			witnesses: ["Tony Slattery", "Ryan Stiles"],
			crime: "Case of the stolen chicken",
		},
		{
			name: "Helping Hands",
			alternateName: "Hands Through",
			performers: [
				"Stephen Frost",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "In a boxing gym",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "A mime artist",
				},
				{
					name: "Colin Mochrie",
					quirk: "Parachutist",
				},
				{
					name: "Ryan Stiles",
					quirk: "Fish being reeled in",
				},
			],
		},
		{
			name: "Hoedown",
			about:
				"[Reading of the will](https://whoselineisitanyway.fandom.com/wiki/Reading_of_the_Will_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
