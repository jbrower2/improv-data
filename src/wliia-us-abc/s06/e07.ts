import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-07",
	airdate: "2004-08-14",
	productionNumber: "296734-430",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Michael Jackson turning into a bloodthirsty werewolf",
				},
				{
					name: "Colin Mochrie",
					quirk: "The world's most annoying person to sit next to on a plane",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Evil scientist in his lab about to mutate into a horrific version of the other two bachelors",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Greg Proops"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Babies eating and licking things",
		},
		{
			name: "Funeral",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			musicians: ["Laura Hall", "Linda Taylor"],
			for: "Joe, who died in a freak fishing accident",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Heroic fireman determined to rescue everyone",
				},
				{
					name: "Colin Mochrie",
					quirk: "Talent night at an old folks home",
				},
				{
					name: "Ryan Stiles",
					quirk: "Series of delivery guys in porn films",
				},
			],
		},
		{
			name: "African Chant",
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Crystal, a hawker at the Perris Auto Speedway",
		},
		{
			name: "Props",
			pairs: [
				["Drew Carey", "Ryan Stiles"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
	],
};
