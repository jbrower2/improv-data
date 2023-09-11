import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Chloe Butler and Monique Gaxiola"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-11",
	airdate: "2013-09-17",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Chloe Butler and Monique Gaxiola"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is Luke Skywalker and Jonathan is his faithful android sidekick C-3PO, they are preparing to destroy an enemy force field, and Wayne, who plays Darth Vader, speeds in on a hover bike to attack them",
			notes: [
				"Do it like you're used car salesmen",
				"Do it like pro wrestlers",
				"Do it like a cheesy porn",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Chloe and Monique",
			styles: ["The Rolling Stones"],
		},
		{
			name: "What's in the Bag?",
			performers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			bagDonors: ["Suzanne", "Rosie"],
			scene:
				"Ryan is Captain Kirk and Colin is Spock, they've beamed down to a planet's surface where they captured and examine a distressed alien life form, played by Wayne",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Songs that celebrate divorce",
				"If dogs went to therapy",
				"Conventions you don't want to be invited to",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Chloe", "Monique"],
			scene:
				"Firefighters asleep at their station when they get a call that a fire has broken out at a department store",
		},
	],
};
