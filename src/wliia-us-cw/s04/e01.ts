import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Alfonso Ribeiro"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-01",
	airdate: "2016-05-23",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Alfonso Ribeiro"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "One day in the supermarket",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Alfonso",
			styles: ["80s breakdance"],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Alfonso Ribeiro",
			scene:
				"Mad scientist Ryan is experimenting on his assistant Alfonso, forcing him to take potions that have strange effects, when suddenly Ryan's unstable female assistant Wayne bursts in also having drunk all them potions",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely pet food commercials",
				'Unusual times to use the phrase "ta-da"',
				"Things you wouldn't want to hear on a submarine",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Alfonso"],
			scene:
				"A young couple are camping in the woods, when suddenly they are abducted by aliens and taken to their amazing spacecraft",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Gary Anthony Williams", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Cynthia, who died tragically in a hockey-related accident",
		},
	],
};
