import { type Episode } from "../../types/episode.js";

export const e23: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 23,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-23",
	airdate: "2005-05-09",
	productionNumber: "296744-7023",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Noah Sheshavingmybaby",
			},
			coAnchor: {
				name: "Kathy Greenwood",
				alternateName: "Tipsy",
				quirk:
					"_Jerry Springer_ guest who's been brought on to reveal her shocking secret to husband Colin",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Juan Tanamera",
				quirk:
					"World famous fashion designer training his new models how to work the catwalk",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Scattered Showers",
				quirk: "Using everyone else's bodies as his weather maps",
			},
		},
		{
			name: "Number of Words",
			scene:
				"It's a deleted scene from _Rocky_; Rocky, played by Colin, is being trained by his coach, Ryan; the wife Adrian, who is Kathy, is trying to talk him out of fighting; suddenly, Rocky's tough-talking opponent, Wayne, walks into the gym",
			performers: [
				{
					name: "Colin Mochrie",
					words: 3,
				},
				{
					name: "Ryan Stiles",
					words: 5,
				},
				{
					name: "Kathy Greenwood",
					words: 2,
				},
				{
					name: "Wayne Brady",
					words: 4,
				},
			],
		},
		{
			name: "Action Replay",
			actors: ["Kathy Greenwood", "Wayne Brady"],
			reEnacters: ["Ryan Stiles", "Colin Mochrie"],
			originalScene:
				"With the boss arriving for dinner at any moment, panicky Kathy is struggling to get into her tight outfit, while her husband Wayne is frantically trying to fix a burst pipe under the bathroom sink",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Kathy"],
			scene:
				"A couple ride donkeys into the Grand Canyon for a romantic overnight camping trip",
		},
		{
			name: "Show-Stopping Number",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Working at the United States Senate",
			songs: [
				"I Don't Have What It Takes Anymore",
				"I'm the Best Man for the Job",
				"The Itty-Bitty Panty Party Participates of the Partisan Committee",
			],
		},
		{
			name: "World's Worst",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Person to be married to"],
		},
	],
};
