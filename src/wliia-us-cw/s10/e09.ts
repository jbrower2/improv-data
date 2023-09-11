import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-09",
	airdate: "2022-01-15",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "All the members of Colin's long lost Jamaican family",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Hick veterinarian convinced that everyone is a farm animal that needs a check up",
				},
				{
					name: "Ryan Stiles",
					quirk: "One of Colin's previous lovers coming back for a final fling",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Jennica", "Kayla"],
			scene:
				"Ryan is boy wizard Harry Potter, and Colin is Hermione; during a Hogwarts fireworks party, their owls warn them that evil wizard Voldemort and his giant snake have broken in",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Jeff Davis"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Making sausages",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"How to blow a job interview with one sentence",
				"Weird things to happen at a doctor's exam",
				"Bad things to say through a megaphone",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Acne_",
			songs: [
				{
					style: "Swing",
					title: "I'm Clearing Up",
				},
				{
					style: "Bluegrass rap",
					title: "I'm Putting Cream on It, I Don't Care Who Sees",
				},
			],
		},
	],
};
