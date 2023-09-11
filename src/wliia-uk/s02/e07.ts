import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Josie Lawrence"
	| "Paul Merton"
	| "Sandi Toksvig"
	| "Tony Slattery"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-07",
	airdate: "1989-12-29",
	host: "Clive Anderson",
	performers: [
		"Greg Proops",
		"Josie Lawrence",
		"Paul Merton",
		"Sandi Toksvig",
		"Tony Slattery",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Santa Gets Lost on the London Underground_",
			performers: [
				{
					name: "Greg Proops",
					author: "C. Clement Moore",
				},
				{
					name: "Sandi Toksvig",
					author: "Jane Asher's book of _Party Cakes_",
				},
				{
					name: "Tony Slattery",
					author: "A child's letter to Santa",
				},
				{
					name: "Mike McShane",
					author: "Robert Heinlein",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Josie Lawrence", "Paul Merton"],
					scene: "Paul is a carol singer arriving at somebody's house",
					styles: ["Hitchcock", "Pantomime", "Science fiction", "Disaster"],
				},
				{
					performers: ["Greg Proops", "Mike McShane"],
					scene: "Greg is a child and Mike is the real Santa Claus",
					styles: ["Romance", "Western", "Laurel & Hardy", "A beach movie"],
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Crackers",
			styles: ["Jazz (Mike)", "Swiss yodeling (Josie)", "Musical (Duet)"],
		},
		{
			name: "Rap",
			about: "Hangover",
		},
		{
			name: "Party Quirks",
			host: "Sandi Toksvig",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Verbalises all his thoughts",
				},
				{
					name: "Paul Merton",
					quirk: "True love on the 12th day of Christmas",
				},
				{
					names: ["Josie Lawrence", "Tony Slattery"],
					quirk: "Front and back end of a pantomime horse",
				},
				{
					name: "Mike McShane",
					quirk: "U.S. TV Christmas special",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: [
				"Person to come and visit you when you're in hospital at Christmas",
			],
		},
		{
			name: "Props",
			pairs: [
				["Paul Merton", "Mike McShane"],
				["Josie Lawrence", "Sandi Toksvig"],
				["Tony Slattery", "Greg Proops"],
			],
		},
		{
			name: "Musical Producers",
			producers: ["Sandi Toksvig", "Paul Merton"],
			actors: [
				"Josie Lawrence",
				"Mike McShane",
				"Tony Slattery",
				"Greg Proops",
			],
			musician: "Richard Vranch",
			topics: ["Christmas stuffing", "Vomiting", "Swimming"],
		},
	],
};
