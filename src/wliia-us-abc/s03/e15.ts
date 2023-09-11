import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-15",
	airdate: "2001-01-11",
	productionNumber: "296722-321",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "All the members of the Klump family",
				},
				{
					name: "Colin Mochrie",
					quirk: "Angry neighbor whose relaxing bath keeps getting disturbed",
				},
				{
					name: "Ryan Stiles",
					quirk: "Wary bird building its nest being repeatedly frightened away",
				},
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Ryan is a heroic gladiator",
				"he's about to go out",
				"fight for his freedom",
				"he tries to raise the spirits of his panicking fellow gladiator",
				"Colin",
			],
			lines: [
				"My name is Bill.  I like tight panties.",
				"Give it a squeeze and check its working.",
				"Look at me, I'm tiny.",
				"The chickens are coming!  The chickens are coming!",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Kevin", "Tina"],
			scene:
				"Two Jedi Knights checking out their spaceship and equipment before going into battle to attack the Death Star",
		},
		{
			name: "Duet",
			singers: ["Jeff Davis", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Timmery, a dental hygienist",
			styles: ["Gospel"],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[The beach](https://whoselineisitanyway.fandom.com/wiki/Beach_Hoedown_(US_3-15))",
		},
	],
};
