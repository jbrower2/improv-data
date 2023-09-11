import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Clive Anderson"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Chip Esten"
	| "Ryan Stiles"
	| "Brad Sherwood"
	| "Sam Johnson"
	| "Jane Brucker"
	| "Ron West"
	| "Richard Vranch"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-13",
	airdate: "1992-04-17",
	host: "Clive Anderson",
	performers: [
		"Colin Mochrie",
		"Greg Proops",
		"Chip Esten",
		"Ryan Stiles",
		"Brad Sherwood",
		"Sam Johnson",
		"Jane Brucker",
		"Ron West",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Colin Mochrie", "Greg Proops"],
			scene:
				"Greg is an old cop and there's a rookie cop joining him in his car for the first time today",
			styles: [
				"Soviet propaganda",
				"Swedish porn movie",
				"50s B movie",
				"Army recruiting film",
				"Thriller",
			],
		},
		{
			name: "Change Letter",
			alternateName: "Letter Change",
			performers: ["Chip Esten", "Ryan Stiles"],
			scene: "Chip is a waiter and Ryan is a customer",
			cantSay: "T",
			mustSay: "Z",
		},
		{
			name: "World's Worst",
			performers: [
				"Greg Proops",
				"Ryan Stiles",
				"Colin Mochrie",
				"Brad Sherwood",
			],
			scenes: ["Person to visit you in hospital"],
		},
		{
			name: "Expert",
			interviewer: "Greg Proops",
			expert: "Ryan Stiles",
			topic: "The afterlife",
		},
		{
			name: "Bartender",
			alternateName: "Bar Scene",
			bartender: "Chip Esten",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Sam Johnson",
					quirk: "Trying to forget his bed-wetting problem",
				},
				{
					name: "Jane Brucker",
					quirk: "Clive has left her",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Ron West", "Greg Proops"],
			],
		},
		{
			name: "Alphabet",
			performers: ["Greg Proops", "Ryan Stiles"],
			scene: "In a tattoo parlor",
			startingLetter: "Q",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Ryan Stiles", "Jane Brucker", "Sam Johnson"],
			scene: "One day on the highway",
		},
		{
			name: "Superheroes",
			crisis: "Earthquakes",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Proctologist Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Touchy Feely Man",
				},
				{
					name: "Ron West",
					superpower: "Obscure Reference Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "Lunch Box Boy",
				},
			],
		},
		{
			name: "Hoedown",
			about:
				"[Making cheese](https://whoselineisitanyway.fandom.com/wiki/Making_Cheese_Hoedown)",
			performers: [
				"Greg Proops",
				"Colin Mochrie",
				"Ryan Stiles",
				"Brad Sherwood",
			],
			musicians: ["Richard Vranch"],
		},
	],
};
