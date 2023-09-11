import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Danielle Panabaker"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-13",
	airdate: "2017-09-14",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Danielle Panabaker"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Gary Anthony Williams",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Tony Stark trying to save people in his malfunctioning Iron Man suit",
				},
				{
					name: "Colin Mochrie",
					quirk: "French pig snuffling for truffles hidden in dark places",
				},
				{
					name: "Ryan Stiles",
					quirk: "Naked hillbilly who thinks people have stolen his clothes",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Danielle",
			styles: ["Pop music"],
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			phoneDonors: ["Jicae", "Lenny"],
			scene:
				"Colin is a surgeon and Ryan and Wayne are the nurses performing an emergency operation",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad things to say on your first day in prison",
				"Unlikely things to read out in a sexy way",
				"People you wouldn't want to go into space with",
				"What the _Whose Line_ audience is really thinking",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Colin Mochrie", "Ryan Stiles"],
			props: ["Wayne", "Danielle"],
			scene:
				"Billionaire Colin is showing off all of the features of his private jet to his new girlfriend Ryan, when they land he entertains her at the world's finest Alpine spa",
		},
	],
};
