import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Rob Gronkowski"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-11",
	airdate: "2014-06-02",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Rob Gronkowski"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Excited male stripper getting a group together to rival the Chippendales",
				},
				{
					name: "Colin Mochrie",
					quirk: "Enthusiastic dog show judge who thinks the others are dogs",
				},
				{
					name: "Ryan Stiles",
					quirk: "Moose trying to mate during hunting season",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Rob",
			styles: ["Stadium rock"],
		},
		{
			name: "What's in the Bag?",
			performers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			bagDonors: ["Katrina", "Grace"],
			scene:
				"Astronauts on a space station that's been damaged by a meteor shower, Ryan and Colin must make repairs and then fix their malfunctioning android Wayne",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jonathan Mangum"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Rob Gronkowski",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a tough fitness coach helping Rob achieve a healthier lifestyle",
		},
	],
};
