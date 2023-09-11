import { type Episode } from "../../types/episode";

export const e25: Episode<
	| "Drew Carey"
	| "Chip Esten"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 25,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-25",
	airdate: "2002-02-07",
	productionNumber: "296734-403",
	host: "Drew Carey",
	performers: ["Chip Esten", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Superheroes",
			crisis: "Loss of loud colors",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Tacky Shirt Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "On the Verge of a Nervous Breakdown Boy",
				},
				{
					name: "Chip Esten",
					superpower: "The Mick Jagger Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "The Junkyard Dog on a Chain Kid",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Flo", "Carmen"],
			scene:
				"Two English knights preparing to defend the castle and the demanding queen from an approaching barbaric army",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Chip Esten"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen:
				"Horrible sports bloopers, including mountain biking, skiing, running, and figure skating",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If actors were completely honest during their award-acceptance speeches",
				"Circus acts that didn't last long",
				"Odd things for a lounge singer to sing about",
			],
		},
		{
			name: "Hoedown",
			performers: ["Chip Esten", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Backstreet Boys](https://whoselineisitanyway.fandom.com/wiki/Backstreet_Boys_Hoedown)",
		},
	],
};
