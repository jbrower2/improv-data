import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Ulambayaryn Byambajav"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-06",
	airdate: "2014-04-18",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Ulambayaryn Byambajav"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"People you wouldn't want to go on a long road trip with",
				'Using the word "boing," demonstrate bad times for Viagra to kick in',
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Katrina", "Terry"],
			scene:
				"Astronauts about to blast off in their rocket and go to the International Space Station to tackle a rampaging alien",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Byambajav",
			styles: ["Motown"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Gary Anthony Williams"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Byambajav"],
			scene:
				"Aladdin and Princess Jasmine are travelling across the desert by camel, battling the elements before spending the night in the sultan's luxury palace",
		},
	],
};
