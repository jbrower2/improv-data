import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-14",
	airdate: "2018-08-27",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "One day at the beach",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Greg Proops"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Dorothy",
				"played by Colin",
				"is traveling with the Tin Man",
				"played by Ryan",
				"along the Yellow Brick Road",
			],
			lines: [
				"Can I smell cheese?",
				"That's one gigantic butt!",
				"Kiss me, fat boy.",
				"Grease me up, baby, I'm going in.",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely perfume scents",
				"If famous TV shows were performed on too much caffeine",
				"Things that don't sound right in an angry voice",
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Different celebrities being sucked into a black hole",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Overzealous pollster conducting a secret survey to find out the studio's favorite underwear",
				},
				{
					name: "Ryan Stiles",
					quirk: "Hummingbird looking for food in strange places",
				},
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Sarah, who died tragically in a vacuum-related accident",
		},
	],
};
