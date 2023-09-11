import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Greg Proops"
	| "Sandi Toksvig"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-16",
	airdate: "1991-05-03",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Greg Proops",
		"Sandi Toksvig",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "March",
			musician: "Richard Vranch",
			about: "Taxidermy",
		},
		{
			name: "Alphabet",
			performers: ["Greg Proops", "Sandi Toksvig"],
			scene: "Going to an optician's",
			startingLetter: "X",
		},
		{
			name: "Tag",
			startingPositions: [
				{
					startingPosition: "All fours",
					name: "Greg Proops",
				},
				{
					startingPosition: "On Greg's back",
					name: "Mike McShane",
				},
			],
		},
		{
			name: "Psychiatrist",
			psychiatrist: "Josie Lawrence",
			musician: "Richard Vranch",
			performers: [
				{
					name: "Greg Proops",
					quirk: "Afraid of women",
				},
				{
					name: "Mike McShane",
					quirk: "Obsessed with poodles",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Josie Lawrence", "Greg Proops"],
				["Sandi Toksvig", "Mike McShane"],
			],
		},
		{
			name: "Party Quirks",
			host: "Sandi Toksvig",
			guests: [
				{
					name: "Mike McShane",
					quirk: "World War II submarine captain",
				},
				{
					name: "Josie Lawrence",
					quirk: "Circus performer",
				},
				{
					name: "Greg Proops",
					quirk: "Horse racing commentator",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Mike McShane", "Greg Proops"],
			scene: "A pilot and co-pilot in an airplane",
			styles: [
				"_Rocky_",
				"_Rocky Horror_",
				"_Love Story_",
				"_Saturday Night Fever_",
			],
		},
		{
			name: "American Musical",
			musician: "Richard Vranch",
			about:
				"Psychology, Tennis, Training for a marathon, and Visiting roommates",
		},
	],
};
