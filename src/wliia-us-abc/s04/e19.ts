import { type Episode } from "../../types/episode.js";

export const e19: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-19",
	airdate: "2001-12-12",
	productionNumber: "296734-411",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Power-crazed Southern state trooper",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Joined at the butt to Ryan but desperate for his own career in showbiz",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Bragging motorcycle stunt rider taking on ever-greater challenges",
				},
			],
		},
		{
			name: "Motown Group",
			singers: ["Wayne Brady", "Chip Esten", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			song: "Do the Hockey Player",
		},
		{
			name: "Song Titles",
			scene: "In the Army",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"When cartoon characters go on dates",
				"First drafts of famous movie lines",
				"World's worst person to be stuck with at a party",
				"Trivial reasons to hold news conferences",
				"Color commentators on their day off",
				"Things you can say to your dog, but not your girlfriend",
				"Other things Dorothy and her friends asked the Wizard for",
			],
		},
		{
			name: "Hoedown",
			performers: ["Chip Esten", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Body odor](https://whoselineisitanyway.fandom.com/wiki/Body_Odor_Hoedown)",
		},
	],
};
