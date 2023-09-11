import { type Episode } from "../../types/episode";

export const e18: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Emily Bett Rickards"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-18",
	airdate: "2016-09-14",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Emily Bett Rickards"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Moe Thanyoucanhandlebaby",
			},
			coAnchor: {
				name: "Gary Anthony Williams",
				alternateName: "Karen",
				quirk: "Colin's furious wife, appearing on _The Jerry Springer Show_",
			},
			sports: {
				name: "Wayne Brady",
				quirk:
					"Frantically selling parts of his body in the Wayne Brady Clearance Sale",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Crazed army general seizing control of the _Whose Line_ studio",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Emily",
			styles: ["Dueling Barry Whites"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Emily"],
			scene:
				"Two castaways at sea who spot a mysterious tropical island and go to find food and make shelter and mayhem on that island",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Gary Anthony Williams"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Outtakes from _Star Trek_",
				"If all TV shows were performed by incredibly angry people",
				"Weird places to put an advertisement",
			],
		},
	],
};
