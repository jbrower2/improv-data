import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Chris Jericho"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-13",
	airdate: "2016-08-03",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Chris Jericho"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Clay Ladyclay",
			},
			coAnchor: {
				name: "Gary Anthony Williams",
				alternateName: "Reverend Terry",
				quirk: "Fire & brimstone preacher attempting to exorcise Colin",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Playing as many characters from _Star Wars_ as possible",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Jeff",
				quirk: "Rapidly going through his teenage years",
			},
		},
		{
			name: "World's Worst",
			scenes: ["Kids' TV show"],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Chris",
			styles: ["Stadium rock"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Pickup lines of nursery rhyme characters",
				"What Aisha is thinking right now",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Chris"],
			scene:
				"Honeymooning couple Ryan and Colin are enjoying a luxury vacation in Hawaii until things start to go terribly wrong",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Gary Anthony Williams", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Helga, who died tragically in a dairy-food-related accident",
		},
	],
};
