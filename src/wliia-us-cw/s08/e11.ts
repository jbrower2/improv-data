import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-11",
	airdate: "2020-07-13",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Gary Anthony Williams",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "A series of Muppets turning evil",
				},
				{
					name: "Colin Mochrie",
					quirk: "Horny gorilla",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Mosquito who takes on the characteristics of whoever he bites",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Gary Anthony Williams"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["Ryan is Romeo", "Colin is Juliet"],
			lines: [
				"Do you wanna see my rash?",
				"If only I had a penis...",
				"Just shut your big, fat mouth!",
				"Get down and bark like a dog!",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say at a gas station that you can't say about your partner",
				"Things that you would not see in a food commercial",
				"Bad names for shampoo",
				"What Aisha is thinking right now",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Firefighter_",
			songs: [
				{
					style: "60s girl groups",
					title: "Bring Out the Hose",
				},
				{
					style: "Calypso",
					title: "Catch the Baby",
				},
			],
		},
	],
};
