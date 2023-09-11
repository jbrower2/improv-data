import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Colin Mochrie"
	| "Josie Lawrence"
	| "Greg Proops"
	| "Chip Esten"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-11",
	airdate: "1994-09-09",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Ryan Stiles",
		"Tony Slattery",
		"Colin Mochrie",
		"Josie Lawrence",
		"Greg Proops",
		"Chip Esten",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Scenes from a Hat",
			performers: [
				"Stephen Frost",
				"Ryan Stiles",
				"Tony Slattery",
				"Colin Mochrie",
			],
			scenes: [
				"If our eyes were somewhere else on our bodies",
				"Practical-joking international share dealers",
				"Worrying things to be given on a plane",
				"Life's big disappointments",
				"Designing the first human",
				"Faux pas at a christening",
				"Monsters that aren't scary",
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Tony Slattery", "Stephen Frost"],
			scene: "Stephen's leading a mutiny on Tony's ship",
			styles: [
				"Medieval mystery play",
				"Hammer horror",
				"_Carry On_ combined with a Jacobean tragedy",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["Pre-wedding nerves"],
			lines: [
				"On the whole, I prefer a dog.",
				"Can you smell something burning?",
				"Bad sneakers and a pinata, my friend",
				"Does it usually throb like that?",
			],
		},
		{
			name: "Song Titles",
			performers: [
				"Josie Lawrence",
				"Stephen Frost",
				"Tony Slattery",
				"Ryan Stiles",
			],
			scene: "On a boat",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Tony Slattery", "Ryan Stiles"],
			translators: ["Stephen Frost", "Colin Mochrie"],
			title: "_Farewell, My Porcupine_",
			languages: ["Italian"],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "A mop",
			styles: ["Cocktail lounge jazz ballad"],
		},
		{
			name: "Props",
			pairs: [
				["Tony Slattery", "Greg Proops"],
				["Chip Esten", "Ryan Stiles"],
			],
		},
		{
			name: "Film Trailer",
			narrator: "Greg Proops",
			performers: ["Ryan Stiles", "Colin Mochrie", "Tony Slattery"],
			title: "_The Revenge of the Sheep Shearer_",
		},
		{
			name: "News Report",
			interviewer: "Greg Proops",
			expert: "Tony Slattery",
			reporter: "Colin Mochrie",
			variousCharacters: "Ryan Stiles",
			topic: "David & Goliath",
		},
		{
			name: "Funeral",
			performers: [
				"Ryan Stiles",
				"Stephen Frost",
				"Colin Mochrie",
				"Tony Slattery",
			],
			for: "John, the train spotter",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "Dodgems operator",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Tony Slattery", "Josie Lawrence"],
			translators: ["Stephen Frost", "Ryan Stiles"],
		},
		{
			name: "Hoedown",
			performers: [
				"Greg Proops",
				"Mike McShane",
				"Ryan Stiles",
				"Tony Slattery",
			],
			musicians: ["Richard Vranch"],
			about:
				"[Scuba diving](https://whoselineisitanyway.fandom.com/wiki/Scuba_Diving_Hoedown_(UK_Episode_6-11))",
		},
	],
};
