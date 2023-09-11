import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Ricki Lake"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-10",
	airdate: "2020-07-06",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Ricki Lake"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			alternateName: "Dating App",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Teething baby biting on unusual things",
				},
				{
					name: "Colin Mochrie",
					quirk: "Bird looking for the perfect place to lay her egg",
				},
				{
					name: "Ryan Stiles",
					quirk: "Colin's trashy ex-wife, trying to make him jealous",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "~~Ricki~~ Whips and whatnot",
			styles: ["60s girl group"],
		},
		{
			name: "Whose Line?",
			performers: ["Wayne Brady", "Colin Mochrie"],
			scenes: [
				"Colin is Batman",
				"Wayne is Robin; they are having an argument",
			],
			lines: [
				"My father was a chimp.",
				"Screw this, I'm going to Albuquerque.",
				"Kiss me like you mean it.",
				"If you're nice, I'll let you touch it.",
			],
		},
		{
			name: "Themed Restaurant",
			diners: ["Chip Esten", "Ricki Lake"],
			waiters: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			scene: "A couple enjoying a romantic meal",
			theme: "Olympics",
		},
		{
			name: "Helping Hands",
			performers: [
				"Ricki Lake",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Farmer Ryan has prepared a welcome meal for his fiancee Ricki and is explaining what her new life on the farm will be like",
		},
	],
};
