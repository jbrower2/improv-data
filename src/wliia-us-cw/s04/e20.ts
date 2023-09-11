import { type Episode } from "../../types/episode";

export const e20: Episode<
	| "Aisha Tyler"
	| "Brad Sherwood"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Cheryl Hines"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-20",
	airdate: "2016-09-28",
	host: "Aisha Tyler",
	performers: ["Brad Sherwood", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Cheryl Hines"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Jeff Davis",
					quirk: "Keanu Reeves turning into The Incredible Hulk",
				},
				{
					name: "Colin Mochrie",
					quirk: "Dentist fighting his urges to passionately kiss his patients",
				},
				{
					name: "Ryan Stiles",
					quirk: "Easily panicked ostrich",
				},
			],
		},
		{
			name: "Doo-wop",
			singers: ["Jeff Davis", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Rachel, who died tragically in a dessert-related accident",
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Cheryl Hines",
			styles: ["Neil Diamond", "Mick Jagger"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad things for a psychiatrist to say",
				"Pickup lines in a grocery store",
				"Unlikely lines from a children's movie",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Cheryl Hines",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is celebrating his first Christmas with his beautiful new wife, Cheryl",
		},
	],
};
