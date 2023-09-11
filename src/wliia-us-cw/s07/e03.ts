import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-03",
	airdate: "2019-07-01",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is an heroic Jedi Knight teaching his young apprentice Jonathan some lightsaber skills when Wayne appears as various other characters in _Star Wars_",
			notes: [
				"Do it like frat boys",
				"Do it like really sexy and touch each other inappropriately as much as you can",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Karen", "Gracie"],
			scene:
				"Ryan and Colin are two cops patrolling a casino which is suddenly raided by a gang of Russian criminals",
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Wayne Brady"],
			moversFromTheAudience: ["Rihanna", "Josh"],
			scene: "The planet is being affected by a shortage of Italian food",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"How to make your roommate move out",
				"Bad things to say or do in a crowded place",
				"Unlikely things to happen in the shower",
				"Jingles from embarrassing medical commercials",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Astronaut_",
			songs: [
				{
					style: "Folk Duo",
					title: "Too Close in a Capsule",
				},
				{
					style: "Punk",
					title: "Splashdown",
				},
			],
		},
	],
};
