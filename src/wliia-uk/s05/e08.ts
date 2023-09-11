import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Slattery"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_5-08",
	airdate: "1993-04-23",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Colin Mochrie",
		"Ryan Stiles",
		"Tony Slattery",
	],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Colin Mochrie", "Ryan Stiles"],
					scene: "Two galley slaves",
					styles: [
						"School play",
						"American soap opera",
						"_Sesame Street_",
						"Chase movie",
					],
				},
				{
					performers: ["Tony Slattery", "Stephen Frost"],
					scene: "Another go on a fairground rifle range",
					styles: ["Kitchen sink drama", "Horror", "B movie"],
				},
			],
		},
		{
			name: "Old Job, New Job",
			alternateName: "New Job, Old Job",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			oldJobPerformers: ["Stephen Frost"],
			scene:
				"Colin is trying to buy some drugs from Ryan, joined by Stephen, also a drug supplier",
			oldJob: "Stephen used to be a greengrocer",
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["A reunion of old chums"],
			lines: [
				"Take it to the bridge, Mr. Brown, and someone will be along shortly.",
				"Quick, let's rub noses like the Eskimos do.",
				"Tweak it, baby.",
				"A dead duck won't fly backwards.",
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be a weather forecaster"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Stephen Frost", "Tony Slattery"],
			],
		},
		{
			name: "Song Titles",
			performers: ["Colin Mochrie", "Ryan Stiles", "Stephen Frost"],
			scene: "In a restaurant",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Tony Slattery"],
			scene: "Advertising whatever he wants",
		},
		{
			name: "Superheroes",
			crisis: "Space flight going out of control near Uranus",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Suction Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Leg-Humping Man",
				},
				{
					name: "Stephen Frost",
					superpower: "Erotic Film Director Guy",
				},
				{
					name: "Tony Slattery",
					superpower: "Royal Procession Commentator Man",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Tony Slattery",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Tony is going to Ryan to learn about wine tasting",
		},
	],
};
