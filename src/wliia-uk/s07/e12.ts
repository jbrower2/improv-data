import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Clive Anderson"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Stephen Frost"
	| "Tony Slattery"
	| "Mike McShane"
	| "Caroline Quentin"
	| "Greg Proops"
	| "Josie Lawrence"
	| "Richard Vranch"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-12",
	airdate: "1995-10-13",
	host: "Clive Anderson",
	performers: [
		"Colin Mochrie",
		"Ryan Stiles",
		"Stephen Frost",
		"Tony Slattery",
		"Mike McShane",
		"Caroline Quentin",
		"Greg Proops",
		"Josie Lawrence",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Two competitors and their pets at a dog show",
			styles: ["_Judge Dredd_", "Jimmy Stewart kind of western", "_Superman_"],
		},
		{
			name: "Questions Only",
			performers: [
				"Stephen Frost",
				"Tony Slattery",
				"Ryan Stiles",
				"Colin Mochrie",
			],
			scenes: ["At the pearly gates"],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "A syringe",
			styles: ["Ragtime"],
		},
		{
			name: "Scene to Music",
			performers: ["Caroline Quentin", "Tony Slattery"],
			scene: "Someone's just failed their driving test",
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["Two frogmen about to invade enemy territory"],
			lines: [
				"Pull it out and let's have a look at it.",
				"How did you lose your leg, Larry?",
				"You think more of that damn monkey than you do of me.",
			],
		},
		{
			name: "World's Worst",
			performers: [
				"Mike McShane",
				"Colin Mochrie",
				"Ryan Stiles",
				"Tony Slattery",
			],
			scenes: ["Thing to say to your in-laws"],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Mike McShane", "Tony Slattery"],
			],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene:
				"Colin is a petrol pump attendant and Ryan is a woman who drives up",
		},
		{
			name: "Press Conference",
			publicFigure: "Tony Slattery",
			journalists: ["Colin Mochrie", "Ryan Stiles", "Mike McShane"],
			scene: "Has captured abominable snowman",
		},
		{
			name: "Bartender",
			bartender: "Mike McShane",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Greg Proops",
					quirk: "Has lost his puppy",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Caroline Quentin",
					quirk: "Audience member at _Top of the Pops_",
				},
				{
					name: "Colin Mochrie",
					quirk: "Chased by low flying aircraft",
				},
				{
					name: "Ryan Stiles",
					quirk: "Frog spawn turning into frog",
				},
			],
		},
		{
			name: "Hoedown",
			performers: [
				"Josie Lawrence",
				"Caroline Quentin",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Richard Vranch"],
			about:
				"[Being born](https://whoselineisitanyway.fandom.com/wiki/Being_Born_Hoedown)",
		},
	],
};
