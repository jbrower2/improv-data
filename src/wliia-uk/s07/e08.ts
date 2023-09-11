import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Josie Lawrence"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-08",
	airdate: "1995-09-15",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Josie Lawrence",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Superheroes",
			crisis: "Peroxide shortage",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Bimbo Woman",
				},
				{
					name: "Ryan Stiles",
					superpower: "Captain Hallucination",
				},
				{
					name: "Stephen Frost",
					superpower: "Over-Indulgence Boy",
				},
				{
					name: "Josie Lawrence",
					superpower: "Carpet Appreciation Girl",
				},
			],
		},
		{
			name: "Fixed Expression",
			scene: "Ryan is a policeman who's stopped Colin and Josie for speeding",
			performers: [
				{
					name: "Ryan Stiles",
					expression: "Shocked",
				},
				{
					name: "Josie Lawrence",
					expression: "Very happy",
				},
				{
					name: "Colin Mochrie",
					expression: "Constipated",
				},
			],
		},
		{
			name: "Film Dub",
			performers: ["Stephen Frost", "Ryan Stiles", "Colin Mochrie"],
			scene: "The salesman arrives",
			film: "_Salome, Where She Danced_ (1945)",
		},
		{
			name: "Old Job, New Job",
			performers: ["Josie Lawrence", "Ryan Stiles"],
			oldJobPerformers: ["Stephen Frost"],
			scene:
				"Josie and Ryan are trying to book into a hotel and finally make contact with Stephen, who is a bellhop",
			oldJob: "Stephen used to be in airport security",
		},
		{
			name: "Film Noir",
			alternateName: "Narrate for Each Other",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Colin is a woman who has come to Ryan's hardware store",
		},
		{
			name: "Hats",
			topic: "World's worst audition tape or show reel",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Stephen Frost", "Josie Lawrence"],
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Taking a seat on the plane",
		},
		{
			name: "Party Quirks",
			host: "Stephen Frost",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Finds bald heads irresistible",
				},
				{
					name: "Colin Mochrie",
					quirk: "Thinks the room is filling with water",
				},
				{
					name: "Ryan Stiles",
					quirk: "Lives whole life in a minute",
				},
			],
		},
		{
			name: "Psychiatrist",
			psychiatrist: "Josie Lawrence",
			musician: "Richard Vranch",
			performers: [
				{
					name: "Colin Mochrie",
					quirk: "An Austrian who thinks he's an armadillo",
				},
				{
					name: "Ryan Stiles",
					quirk: "A Greek in love with a cameraman",
				},
			],
		},
	],
};
