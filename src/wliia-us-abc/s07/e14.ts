import { type Episode } from "../../types/episode.js";

export const e14: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-14",
	airdate: "2005-03-07",
	productionNumber: "296744-7014",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Number of Words",
			scene:
				"From _The Mummy_, Egyptian guide Jeff and feisty female archaeologist Colin open up a tomb, releasing the evil mummy Wayne, and then Dashing adventurer Ryan comes to rescue them",
			performers: [
				{
					name: "Jeff Davis",
					words: 4,
				},
				{
					name: "Colin Mochrie",
					words: 2,
				},
				{
					name: "Wayne Brady",
					words: 3,
				},
				{
					name: "Ryan Stiles",
					words: 5,
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Andrea, a yoga teacher",
			styles: ["The Rat Pack"],
		},
		{
			name: "Infomercial",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			problem: "Snoring",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Foreign remakes of American TV shows",
				"Ads where the product and the style don't match",
				"Inoffensive words that immature people are prone to snicker at",
			],
		},
		{
			name: "Bartender",
			bartender: "Wayne Brady",
			musicians: ["Laura Hall", "Linda Taylor"],
			performers: [
				{
					name: "Jeff Davis",
					quirk: "In love with dogs",
				},
				{
					name: "Colin Mochrie",
					quirk: "Angry his pogo stick broke",
				},
				{
					name: "Ryan Stiles",
					quirk: "Colorblind",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Drew Carey", "Ryan Stiles"],
				["Wayne Brady", "Jeff Davis"],
			],
		},
	],
};
