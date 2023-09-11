import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-03",
	airdate: "1994-07-15",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Colin Mochrie",
		"Ryan Stiles",
		"Tony Slattery",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["Army recruitment office"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Colin is an instructor and Ryan is doing his first parachute jump",
			styles: [
				"_Dirty Dancing_",
				"Shakespeare",
				"Japanese Noh theater",
				"Ghost film",
				"Weepy",
			],
		},
		{
			name: "Film Dub",
			performers: ["Tony Slattery", "Stephen Frost"],
			scene: "One is angry with the other about the state of the flat",
		},
		{
			name: "Song Titles",
			performers: ["Stephen Frost", "Ryan Stiles", "Colin Mochrie"],
			scene: "In a garden center",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Lie Down",
			performers: ["Colin Mochrie", "Ryan Stiles", "Tony Slattery"],
			scene: "A prisoner-of-war camp escape committee meeting",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Cooking in a fish restaurant",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Tony Slattery", "Stephen Frost"],
			],
		},
		{
			name: "Moving People",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Being fitted for a suit",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "Mentions body parts in every sentence",
				},
				{
					name: "Colin Mochrie",
					quirk: "Experiencing too much gravity",
				},
				{
					name: "Ryan Stiles",
					quirk: "Jockey in race",
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
			scene: "Tony is going to Ryan's barbecue",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Vasectomy surgeon](https://whoselineisitanyway.fandom.com/wiki/Vasectomy_Surgeon_Hoedown)",
		},
	],
};
