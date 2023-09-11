import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Carmen Electra"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-12",
	airdate: "2018-08-13",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Carmen Electra"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"NASA's first ever hillbilly astronaut, on a mission to the moon",
				},
				{
					name: "Colin Mochrie",
					quirk: "The world's most unwelcome superhero, 'Captain Fondle'",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Kid's entertainer on the edge of nervous breakdown whilst taping his TV show",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Brad Sherwood"],
			about: "Carmen",
			musicians: ["Laura Hall", "Linda Taylor"],
			styles: ["Two Mick Jaggers"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about college that you can't say about your partner",
				"Weird things to happen at Christmas",
				"Things you shouldn't say just after a kiss",
				"Pick up lines in a home improvement store",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Carmen"],
			scene:
				"Ryan and Colin are putting new high-end furniture and fittings into the world's most luxurious mansion",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Astronaut](https://whoselineisitanyway.fandom.com/wiki/Astronaut_Hoedown_(US_14-12))",
		},
	],
};
