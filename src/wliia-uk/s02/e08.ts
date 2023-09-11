import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Clive Anderson"
	| "Ryan Stiles"
	| "Josie Lawrence"
	| "Neil Mullarkey"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-08",
	airdate: "1990-01-05",
	host: "Clive Anderson",
	performers: [
		"Ryan Stiles",
		"Josie Lawrence",
		"Neil Mullarkey",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Josie Lawrence", "Neil Mullarkey"],
					scene: "The first two people on Earth",
					styles: ["Gangster", "Science fiction", "_Neighbours_", "Western"],
				},
				{
					performers: ["Ryan Stiles", "Mike McShane"],
					scene: "Two people on a plane",
					styles: [
						"Tennessee Williams",
						"Horror",
						"_War",
						"Peace_",
						"Vaudeville",
					],
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Cheese grater",
			styles: ["Boogie-woogie (Mike)", "German Leder (Josie)"],
		},
		{
			name: "World's Worst",
			scenes: [
				"Person to be auditioning to be in a soap suds-style commercial",
			],
		},
		{
			name: "Props",
			pairs: [
				["Neil Mullarkey", "Mike McShane"],
				["Ryan Stiles", "Josie Lawrence"],
			],
		},
		{
			name: "Film Dub",
			scene:
				"A couple of flat-mates talking about two extra friends who are going to be joining them in the house",
		},
		{
			name: "Party Quirks",
			host: "Neil Mullarkey",
			guests: [
				{
					name: "Ryan Stiles",
					quirk: "Bad stand-up comedian",
				},
				{
					name: "Josie Lawrence",
					quirk: "Thinks she's come to a prenatal class",
				},
				{
					name: "Mike McShane",
					quirk: "Rock band roadie",
				},
			],
		},
		{
			name: "American Musical",
			musician: "Richard Vranch",
			about:
				"World War II airplanes, A caretaker in a school, and Winning the pools",
		},
	],
};
