import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-05",
	airdate: "2001-09-27",
	productionNumber: "296722-317",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Members of *NSYNC fighting amongst themselves during a video shoot",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"An insult comic reincarnated as a ravenous blood-sucking leech",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Bride going through her progressively worsening wedding day with husband Colin",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Anna, a sign-language interpreter",
			styles: ["Rod Stewart", "Tina Turner"],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Dracula",
		},
		{
			name: "Party Quirks",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Attending a college keg party from sober to passed out in 30 seconds",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Overly dramatic private investigator finding ridiculous clues to a murder",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Panicking, trapped bird who keeps mistaking the cameras for open windows",
				},
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Chip Esten", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Cheryl, who died tragically in a freak knitting accident",
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Chip Esten"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
