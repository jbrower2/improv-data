import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Malcolm Goodwin"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-04",
	airdate: "2017-06-19",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Malcolm Goodwin"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Gary Anthony Williams",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene:
				"Dr. Frankenstein, Ryan, is bringing his monstrous creation, Colin, to life when suddenly a horde of angry villagers, all played by Wayne, break in",
			notes: [
				"Do it as if you're all movie stars, from a 70s porn movie",
				"Do it as if it was a big Hollywood musical",
			],
		},
		{
			name: "World's Worst",
			scenes: ["Thing to say or do in a hospital"],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Malcolm",
			styles: ["Party music"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				'The worst times to get turned on, using the phrase "Oh, Yeah"',
				"Amusement park rides you wouldn't want to go on",
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Gary Anthony Williams", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Anna, who died from a terrible cheese-related accident",
		},
		{
			name: "Helping Hands",
			performers: [
				"Malcolm Goodwin",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Excited teenage girl Ryan is packing to go away to college, saying goodbye to her boyfriend Malcolm",
		},
	],
};
