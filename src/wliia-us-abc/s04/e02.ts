import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-02",
	airdate: "2001-09-06",
	productionNumber: "296734-405",
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
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Kathy"],
			scene: "Two businessmen arrive at a gym and health spa",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Samantha, an aerobics instructor",
			styles: ["Riverdance"],
		},
		{
			name: "Two-Line Vocabulary",
			scene:
				"Colin's a senior engineer called in to help at the nuclear plant when two other engineers report a leak",
			lines: [
				{
					name: "Wayne Brady",
					lines: ["That's not what you said earlier.", "What does that do?"],
				},
				{
					name: "Ryan Stiles",
					lines: ["Oops, I did it again.", "Are you enjoying this?"],
				},
			],
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "Bad breath cure",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things your mom says or does that make you think she used to be a stripper",
				"Conversation topics that will derail a dinner party",
				"Things bald men are sick of hearing",
				"If Rain Man had different jobs",
				"Hillbilly dating service videos",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[First kiss](https://whoselineisitanyway.fandom.com/wiki/First_Kiss_Hoedown)",
		},
	],
};
