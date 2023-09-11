import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-06",
	airdate: "1995-09-01",
	host: "Clive Anderson",
	performers: ["Mike McShane", "Colin Mochrie", "Ryan Stiles", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Superheroes",
			crisis: "Gap in the ozone layer",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Tight-trouser Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Jilted Lover Boy",
				},
				{
					name: "Tony Slattery",
					superpower: "Obscure Reference Boy",
				},
				{
					name: "Mike McShane",
					superpower: "Coquettish Slut Man",
				},
			],
		},
		{
			name: "Secret",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In a prison",
			secretLocation: "In the curtains",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Mike McShane", "Tony Slattery"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Russian"],
			film: "_The Death of Boris Simpsonski_",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "~~At a barber's~~ Colin is a barber",
		},
		{
			name: "Animals",
			performers: ["Ryan Stiles", "Colin Mochrie", "Mike McShane"],
			scene: "Mike has brought some bad news to the other two",
			animals: "Dinosaurs",
		},
		{
			name: "Old Job, New Job",
			performers: ["Tony Slattery", "Colin Mochrie"],
			oldJobPerformers: ["Ryan Stiles"],
			scene: "At home waiting for the builder to arrive",
			oldJob: "All used to be fashion models",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Mike McShane",
					quirk: "In love with cameras",
				},
				{
					name: "Colin Mochrie",
					quirk: "All 7 dwarfs",
				},
				{
					name: "Ryan Stiles",
					quirk: "Animals crossing the road",
				},
			],
		},
		{
			name: "Bartender",
			alternateName: "Bar Scene",
			bartender: "Mike McShane",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Colin Mochrie",
					quirk: "Annoyed about being jilted",
				},
				{
					name: "Tony Slattery",
					quirk: "In love with cats",
				},
				{
					name: "Ryan Stiles",
					quirk: "Celebrating being invited to the Queen's garden party",
				},
			],
		},
	],
};
