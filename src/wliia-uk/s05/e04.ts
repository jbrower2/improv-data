import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_5-04",
	airdate: "1993-03-26",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Tony Slattery", "Greg Proops"],
					scene: "A sculptor and model",
					styles: ["Tennessee Williams", "_Blossom_", "_Baywatch_"],
				},
				{
					performers: ["Ryan Stiles", "Colin Mochrie"],
					scene: "First snorkeling lesson",
					styles: [
						"John Wayne",
						"Erotic thriller",
						"Romantic comedy",
						"Biker movie",
					],
				},
			],
		},
		{
			name: "Old Job, New Job",
			alternateName: "New Job, Old Job",
			performers: ["Tony Slattery", "Colin Mochrie"],
			oldJobPerformers: ["Ryan Stiles"],
			scene: "Kids in a kindergarten joined by Ryan, the teacher",
			oldJob: "Ryan used to be a cowboy",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene: "Date that's gone wrong",
			film: "_Test Tube Babies_ (1948)",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Arriving at the office",
		},
		{
			name: "World's Worst",
			scenes: ["Clip from a nature documentary"],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Greg Proops"],
				["Ryan Stiles", "Tony Slattery"],
			],
		},
		{
			name: "Scene to Music",
			performers: ["Greg Proops", "Ryan Stiles"],
			scene: "Two people in a supermarket",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Character from a video game",
				},
				{
					name: "Colin Mochrie",
					quirk: "Thinks he is an ant",
				},
				{
					name: "Ryan Stiles",
					quirk: "Motorbike stunt rider",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Greg Proops",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Ryan is a woman demonstrating how a picnic is to be done",
		},
		{
			name: "Hoedown",
			about:
				"[Motorways](https://whoselineisitanyway.fandom.com/wiki/Motorways_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
