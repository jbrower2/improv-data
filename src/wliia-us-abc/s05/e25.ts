import { type Episode } from "../../types/episode";

export const e25: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Neena and Veena Bidasha"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 25,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-25",
	airdate: "2003-07-25",
	productionNumber: "296735-502",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Neena and Veena Bidasha"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Superheroes",
			crisis: "The museum's on fire",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Mad Cow Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Athletic Slap on the Butt Man",
				},
				{
					name: "Chip Esten",
					superpower: "Ants in His Pants Boy",
				},
				{
					name: "Wayne Brady",
					superpower: "The Anything You Can Do, I Can Do Better Kid",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Neena and Veena Bidasha",
			styles: ["Middle Eastern"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Fast-food orders that sound sexy but aren't",
				"Inappropriate times to show off your stomach muscles",
				"Things you don't want to hear as you finish your last bite of dinner",
				"Giving your date's parents too much information",
				"Things that would make you suspect your doctor did not graduate from medical school",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Neena", "Veena"],
			scene:
				"A newlywed couple is gambling in a Vegas casino just before retiring to their elaborate honeymoon suite",
		},
		{
			name: "Themed Restaurant",
			diners: ["Chip Esten", "Drew Carey"],
			waiters: ["Colin Mochrie", "Ryan Stiles"],
			theme: "Steven Spielberg movies",
		},
	],
};
