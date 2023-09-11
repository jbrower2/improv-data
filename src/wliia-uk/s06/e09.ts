import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-09",
	airdate: "1994-08-26",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["Going to the vet"],
		},
		{
			name: "Old Job, New Job",
			performers: ["Greg Proops", "Colin Mochrie"],
			oldJobPerformers: ["Ryan Stiles"],
			scene: "Greg and Colin are going to the undertaker, Ryan",
			oldJob: "Ryan used to be a used car salesman",
		},
		{
			name: "Superheroes",
			crisis: "Trapped in an elevator",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Captain Floppy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Man Who Taps You on the Shoulder to Fake You Out Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "Drunk Tour Guide Guy",
				},
				{
					name: "Tony Slattery",
					superpower: "Misconception Boy",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "On the beach",
		},
		{
			name: "World's Worst",
			scenes: ["Thing for a doctor or surgeon to say"],
		},
		{
			name: "Props",
			pairs: [
				["Tony Slattery", "Greg Proops"],
				["Colin Mochrie", "Ryan Stiles"],
			],
		},
		{
			name: "Fixed Expression",
			scene:
				"Tony and Colin are in the car and the the other two are hitchhikers",
			performers: [
				{
					name: "Greg Proops",
					expression: "Furious",
				},
				{
					name: "Colin Mochrie",
					expression: "Ecstatic",
				},
				{
					name: "Ryan Stiles",
					expression: "Panicky",
				},
				{
					name: "Tony Slattery",
					expression: "Shocked",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Greg Proops",
					quirk: "A surfer",
				},
				{
					name: "Colin Mochrie",
					quirk: "Thinks he's in a toilet",
				},
				{
					name: "Ryan Stiles",
					quirk: "A fireworks display",
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
			scene: "Tony's gone to Ryan for a haircut",
		},
		{
			name: "Hoedown",
			about: "[Sex](https://whoselineisitanyway.fandom.com/wiki/Sex_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
