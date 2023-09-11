import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-01",
	airdate: "1994-07-01",
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
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Colin Mochrie", "Ryan Stiles"],
					scene: "Ryan is teaching Colin to ski",
					styles: ["_Baywatch_", "Japanese", "Science fiction", "Hitchcock"],
				},
				{
					performers: ["Tony Slattery", "Stephen Frost"],
					scene: "Two dustmen finding something interesting in the rubbish",
					styles: ["Disaster", "Cartoon", "Nativity", "Busby Berkeley"],
				},
			],
		},
		{
			name: "Old Job, New Job",
			performers: ["Tony Slattery", "Ryan Stiles"],
			oldJobPerformers: ["Stephen Frost"],
			scene: "Two airline passengers joined by their steward, Stephen",
			oldJob: "Stephen used to be a bus conductor",
		},
		{
			name: "Changing Emotions",
			alternateName: "Changing Room",
			performers: ["Tony Slattery", "Ryan Stiles", "Colin Mochrie"],
			props: [
				{
					prop: "Drinks bottle",
					emotion: "Paranoid",
				},
				{
					prop: "Towel",
					emotion: "Conceited",
				},
				{
					prop: "Bag",
					emotion: "Angry",
				},
			],
			scene:
				"Colin is a coach at the end of a game and his players have lost the game",
		},
		{
			name: "Questions Only",
			scenes: ["Front desk of a hotel"],
		},
		{
			name: "Fixed Expression",
			alternateName: "Fixed Expressions",
			scene: "At a barber shop and the circus is coming to town",
			performers: [
				{
					name: "Stephen Frost",
					expression: "Devastated or sad",
				},
				{
					name: "Colin Mochrie",
					expression: "Happy",
				},
				{
					name: "Ryan Stiles",
					expression: "Shocked",
				},
				{
					name: "Tony Slattery",
					expression: "Anxious",
				},
			],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two people hunting",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Tony Slattery", "Stephen Frost"],
			scene:
				"Before surgery's about to take place, waiting for the anesthetic to take effect",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "Tabloid headline writer",
				},
				{
					name: "Colin Mochrie",
					quirk: "Hamster",
				},
				{
					name: "Ryan Stiles",
					quirk: "Attached to door by elastic",
				},
			],
		},
		{
			name: "Hoedown",
			about:
				"[Riding a donkey](https://whoselineisitanyway.fandom.com/wiki/Riding_a_Donkey_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
