import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Caroline Quentin"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-06",
	airdate: "1996-08-16",
	host: "Clive Anderson",
	performers: [
		"Greg Proops",
		"Caroline Quentin",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	games: [
		{
			name: "Questions Only",
			scenes: ["Aliens meeting Earthlings"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Colin Mochrie", "Ryan Stiles"],
					scene: "Go into the sewers to investigate strange sightings",
					styles: [
						"_Baywatch_",
						"_The Waltons_",
						"One-man show",
						"Swedish porn movie",
						"Disney",
						"_Lassie_",
					],
				},
				{
					performers: ["Greg Proops", "Caroline Quentin"],
					scene: "A store detective and a shoplifter",
					styles: [
						"James Bond",
						"_The Muppets_ or _Sesame Street_",
						"Ballet",
						"_Braveheart_",
					],
				},
			],
		},
		{
			name: "That'll Be Charlie Now",
			alternateName: "Here He Is Now",
			describers: ["Greg Proops", "Ryan Stiles"],
			guests: ["Caroline Quentin", "Colin Mochrie"],
			scene:
				"Two businessmen deciding which of the other two they're going to have to sack",
			characteristics: [
				{
					name: "Caroline Quentin",
					characteristics: [
						"Don't call her by name because she tends to cluck like a chicken",
						"Don't wave to her, she tends to go hysterical",
					],
				},
				{
					name: "Colin Mochrie",
					characteristics: [
						"Don't touch him in any way, he loses all control of his bowels",
						"Don't raise your voice to Colin, he'll start to give you his rendition of the bible",
					],
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Caroline Quentin"],
				["Greg Proops", "Colin Mochrie"],
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "One minute before Colin's date is arriving",
		},
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Caroline Quentin",
					quirk: "Fergie",
				},
				{
					name: "Colin Mochrie",
					quirk: "Escaped convict",
				},
				{
					name: "Ryan Stiles",
					quirk: "Angry neighbour",
				},
			],
		},
		{
			name: "Three of a Kind",
			performers: ["Greg Proops", "Ryan Stiles", "Colin Mochrie"],
			job: "Used car salesmen",
			scene: "In a locker room",
		},
		{
			name: "Hats",
			topic: "Worst possible examples of a video made for a dating agency",
		},
	],
};
