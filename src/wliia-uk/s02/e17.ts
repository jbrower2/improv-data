import { type Episode } from "../../types/episode.js";

export const e17: Episode<
	| "Clive Anderson"
	| "Sandi Toksvig"
	| "Mike McShane"
	| "Josie Lawrence"
	| "Ryan Stiles"
	| "Neil Mullarkey"
	| "Paul Merton"
	| "John Sessions"
	| "Tony Slattery"
	| "Arthur Smith"
	| "Greg Proops"
	| "Richard Vranch"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-17",
	airdate: "1990-03-16",
	host: "Clive Anderson",
	performers: [
		"Sandi Toksvig",
		"Mike McShane",
		"Josie Lawrence",
		"Ryan Stiles",
		"Neil Mullarkey",
		"Paul Merton",
		"John Sessions",
		"Tony Slattery",
		"Arthur Smith",
		"Greg Proops",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			performers: ["Sandi Toksvig", "Mike McShane"],
			scene: "Two drivers who've smashed into each other with their cars",
			styles: ["War film", "Agatha Christie", "Science fiction"],
		},
		{
			name: "Duet",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Food processor",
			styles: ["Love duet"],
		},
		{
			name: "Tag",
			performers: [
				"Josie Lawrence",
				"Neil Mullarkey",
				"Ryan Stiles",
				"Mike McShane",
			],
			startingPositions: [
				{
					startingPosition: "Changing a light bulb",
					name: "Josie Lawrence",
				},
				{
					startingPosition: "Brushing his teeth",
					name: "Neil Mullarkey",
				},
			],
		},
		{
			name: "Interview",
			interviews: [
				{
					interviewer: "John Sessions",
					style: "_NME_",
					name: "Paul Merton",
					character: "Peter Pan",
				},
			],
		},
		{
			name: "Rap",
			performers: [
				"Ryan Stiles",
				"Josie Lawrence",
				"Neil Mullarkey",
				"Mike McShane",
			],
			about: "Veterinarians",
		},
		{
			name: "Props",
			pairs: [
				["Paul Merton", "Mike McShane"],
				["Josie Lawrence", "Tony Slattery"],
			],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Fish slice",
			styles: ["Hymn"],
		},
		{
			name: "Party Quirks",
			host: "Sandi Toksvig",
			guests: [
				{
					name: "Tony Slattery",
					quirk: "Slowly inflating",
				},
				{
					name: "Ryan Stiles",
					quirk: "Does everything twice",
				},
				{
					name: "John Sessions",
					quirk: "Roman Emperor",
				},
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Sandi Toksvig", "Arthur Smith"],
			scene: "He is asking her out to see a film",
			film: "_Teenage Monster_ (1958)",
		},
		{
			name: "American Musical",
			performers: [
				"Josie Lawrence",
				"Mike McShane",
				"Tony Slattery",
				"Greg Proops",
			],
			musician: "Richard Vranch",
			about: "Driving a car, Skiing, and Getting up in the morning",
		},
	],
};
