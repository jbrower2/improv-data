import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Mike McShane"
	| "Tony Slattery"
	| "Sandi Toksvig"
	| "Colin Mochrie"
	| "Paul Merton"
	| "Jim Sweeney"
	| "Greg Proops"
	| "Richard Vranch"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-09",
	airdate: "1991-03-15",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Mike McShane",
		"Tony Slattery",
		"Sandi Toksvig",
		"Colin Mochrie",
		"Paul Merton",
		"Jim Sweeney",
		"Greg Proops",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Props",
			pairs: [
				["Mike McShane", "Sandi Toksvig"],
				["Colin Mochrie", "Tony Slattery"],
			],
		},
		{
			name: "Duet",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "A stapler",
			styles: ["Love ballad"],
		},
		{
			name: "Tag",
			performers: [
				"Sandi Toksvig",
				"Mike McShane",
				"Tony Slattery",
				"Colin Mochrie",
			],
			startingPositions: [
				{
					startingPosition: "On hands and knees",
					name: "Mike McShane",
				},
				{
					startingPosition: "Driving a car",
					name: "Sandi Toksvig",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "A rubber duck",
			styles: ["Punk rock with a hint of Gregorian chant"],
		},
		{
			name: "Film Dub",
			performers: ["Sandi Toksvig", "Paul Merton", "Mike McShane"],
			scene: "A door-to-door salesman",
		},
		{
			name: "March",
			performers: [
				"Tony Slattery",
				"Sandi Toksvig",
				"Colin Mochrie",
				"Mike McShane",
			],
			musician: "Richard Vranch",
			about: "Surveyor",
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "A banana",
			styles: ["American folk song"],
		},
		{
			name: "World's Worst",
			performers: [
				"Josie Lawrence",
				"Greg Proops",
				"Jim Sweeney",
				"Tony Slattery",
			],
			scenes: ["Person to be the last person in the world with"],
		},
		{
			name: "Party Quirks",
			host: "Sandi Toksvig",
			guests: [
				{
					name: "Jim Sweeney",
					quirk: "Magnetic",
				},
				{
					name: "Paul Merton",
					quirk: "Can use words with only two syllables",
				},
				{
					name: "Mike McShane",
					quirk: "Bodyguard",
				},
			],
		},
		{
			name: "American Musical",
			performers: [
				"Tony Slattery",
				"Greg Proops",
				"Jim Sweeney",
				"Josie Lawrence",
			],
			musician: "Richard Vranch",
			about:
				"Girlfriend becoming pregnant, Got mugged, and Getting a job in television",
		},
	],
};
