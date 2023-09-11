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
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-19",
	airdate: "2005-04-11",
	productionNumber: "296744-7019",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"College jock Chip and his nagging girlfriend Ryan are lost and scared in the woods and take refuge inside a creepy log cabin, suddenly, the razor-gloved, disfigured maniac Freddy Krueger, Wayne, bursts through the window",
			notes: [
				"Do it like you're competing to see who can do the best Elvis impression",
				"Do it like it's clips from _America's Funniest Home Videos_",
				"Do it backwards, do the whole scene backwards",
				"Do it as strippers",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Chip Esten", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Fat women dancing",
		},
		{
			name: "Party Quirks",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Desperate to show off his wrestling skills by challenging all-comers to wrestle on stage with him",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"James Bond on an important mission who has a terrible case of food poisoning",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Series of purebreds competing at a dog show but easily distracted by the crowd",
				},
			],
		},
		{
			name: "Bartender",
			bartender: "Chip Esten",
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			performers: [
				{
					name: "Wayne Brady",
					quirk: "Celebrating puberty",
				},
				{
					name: "Ryan Stiles",
					quirk: "Thinks he is a princess",
				},
				{
					name: "Colin Mochrie",
					quirk: "Angry about his divorce",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Chip Esten"],
			musicians: ["Laura Hall"],
			about:
				"[An affair](https://whoselineisitanyway.fandom.com/wiki/Affair_Hoedown)",
		},
	],
};
