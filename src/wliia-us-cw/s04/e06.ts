import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Lolo Jones"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-06",
	airdate: "2016-07-13",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Lolo Jones"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"During a violent storm, short-tempered Ryan and his injured fiancee Jeff break into a creepy cabin in the woods, when suddenly they're attacked by chainsaw-wielding madman Wayne",
			notes: [
				"Do it like you're going wild on Spring Break",
				"Do it like you're Vegas entertainers",
				"Do it like an opera",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Lolo",
			styles: ["Stadium rock"],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Lolo Jones",
			scene:
				"Ryan is an amorous romantic personal trainer taking Lolo through a tough session at the gym when suddenly Wayne enters as Ryan's jealous fiancee who wants to prove that whatever Lolo can do, she can do better.",
		},
		{
			name: "World's Worst",
			scenes: ["Things to say at an awards show"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Lolo"],
			scene:
				"Two competitors at the Winter Olympics trying out all the different sports before finally relaxing at the athletes' village",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Baseball](https://whoselineisitanyway.fandom.com/wiki/Baseball_Hoedown_(US_12-06))",
		},
	],
};
