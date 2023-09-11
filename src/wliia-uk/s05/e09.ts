import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Colin Mochrie"
	| "Josie Lawrence"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_5-09",
	airdate: "1993-04-30",
	host: "Clive Anderson",
	performers: [
		"Greg Proops",
		"Ryan Stiles",
		"Tony Slattery",
		"Colin Mochrie",
		"Josie Lawrence",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Superheroes",
			crisis: "World leaders in an air crash",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Jelly Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Orangutan Boy",
				},
				{
					name: "Tony Slattery",
					superpower: "Male Model Guy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Mr. Continuous Unfunny Pun Man",
				},
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"One is going to a private detective because he suspects his wife cheating",
			],
			lines: [
				"Never put sticky tape on hairy places.",
				"I hope you remember to take the cat out of the fridge.",
				"Is that what you call dress sense?",
				"When did you learn to limbo dance?",
			],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Garden shears or secateurs",
			styles: ["Love song"],
		},
		{
			name: "Alphabet",
			performers: ["Tony Slattery", "Mike McShane"],
			scene: "Two pilots landing a plane",
			startingLetter: "Q",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Ryan Stiles", "Josie Lawrence"],
			scene: "Looking for a new female lead in an opera",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Standing Sitting Bending",
			performers: ["Colin Mochrie", "Ryan Stiles", "Tony Slattery"],
			scene: "At the dentist's",
		},
		{
			name: "Props",
			pairs: [
				["Josie Lawrence", "Ryan Stiles"],
				["Greg Proops", "Mike McShane"],
			],
		},
		{
			name: "Questions Only",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: ["One is trying to buy a motorcycle from the other"],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Jewish mother",
				},
				{
					name: "Colin Mochrie",
					quirk: "Thinks he is a crab",
				},
				{
					name: "Ryan Stiles",
					quirk: "Olympic tobogganist",
				},
			],
		},
		{
			name: "Bartender",
			bartender: "Josie Lawrence",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Greg Proops",
					quirk: "Angry about being made redundant",
				},
				{
					name: "Ryan Stiles",
					quirk: "Trying to forget his wife",
				},
				{
					name: "Mike McShane",
					quirk: "Has bad breath",
				},
			],
		},
	],
};
