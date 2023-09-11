import { type Episode } from "../../types/episode.js";

export const e27: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 27,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-27",
	airdate: "2001-04-12",
	productionNumber: "296722-311",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Questions Only",
			scenes: [
				"The patrons of an Old West saloon prepare for the arrival of the notorious Ugly Gang",
			],
		},
		{
			name: "African Chant",
			singer: "Wayne Brady",
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Mike, an astronomy graduate student",
		},
		{
			name: "The Millionaire Show",
			host: "Colin Mochrie",
			contestant: "Ryan Stiles",
			friendOnThePhone: "Kathy Greenwood",
			audienceMember: "Wayne Brady",
			theme: "Frisky old people",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Scenes from the Eskimo soap opera",
				"Rejected show names for _Whose Line Is It Anyway?_",
				"What Kathy Greenwood is thinking right now",
				"Trying to look cool while doing very uncool things",
				"What women say to each other in the bathroom during the _Whose Line?_ intermission",
				"Odd things to see written on highway warning signs",
				"Titles for Colin Mochrie's autobiography",
				"Other things you can see from the Moon besides the Great Wall of China",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Got arrested](https://whoselineisitanyway.fandom.com/wiki/Got_Arrested_Hoedown_(US_3-27))",
		},
	],
};
