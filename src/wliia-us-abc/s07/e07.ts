import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-07",
	airdate: "2005-02-07",
	productionNumber: "296744-7007",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Superheroes",
			crisis: "It's cold in the studio",
			performers: [
				{
					name: "Brad Sherwood",
					superpower: "Cottage Cheese Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "The Narrowly-Escapes-Death Kid",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Salmon",
				},
				{
					name: "Wayne Brady",
					superpower: "Caught-in-a-Wind-Tunnel Boy",
				},
			],
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene: "Three supermarket employees on the night shift",
		},
		{
			name: "All in One Voice",
			performers: [
				{
					names: ["Colin Mochrie", "Wayne Brady"],
					character: "Lucy",
				},
				{
					names: ["Brad Sherwood", "Ryan Stiles"],
					character: "Ricky Ricardo",
				},
			],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			song: "The First Time We Swam",
		},
		{
			name: "Film Dub",
			performers: [
				"Brad Sherwood",
				"Colin Mochrie",
				"Ryan Stiles",
				"Wayne Brady",
			],
			scene: "A team of suit salesmen are trying to make a sale",
			film: "_The Younger Brothers_ (1949)",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Bina", "Kathy"],
			scene:
				"Two nervous World War II paratroopers are about to leave on a mission to parachute into occupied France",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"The curriculum at Hillbilly University",
				"I didn't know the mic was on",
				"Nightly bedside prayers of _Whose Line?_ cast members",
			],
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Brad Sherwood"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
