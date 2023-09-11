import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Adam Rippon"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-06",
	airdate: "2019-07-22",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Adam Rippon"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			alternateName: "Dating App",
			host: "Gary Anthony Williams",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Preacher who turns to a life of sin every evening",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"The world's itchiest cat looking for the perfect scratching post",
				},
				{
					name: "Ryan Stiles",
					quirk: "The life cycle of a Thanksgiving turkey",
				},
			],
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Gary Anthony Williams", "Wayne Brady", "Colin Mochrie"],
			phoneDonors: ["Elizabeth", "Jillian"],
			scene:
				"Colin is the commander of a submarine which has sprung a leak and he's called his first officers Wayne and Gary to help solve this crisis",
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: 'Adam - "Mystery Kool-Aid"',
			styles: ["80s pop"],
		},
		{
			name: "World's Worst",
			scenes: ["Thing to see or hear on a morning television show"],
		},
		{
			name: "Living Scenery",
			actors: ["Colin Mochrie", "Ryan Stiles"],
			props: ["Wayne", "Adam"],
			scene:
				"Colin's a flirtatious real estate agent demonstrating all the features of a fully-furnished home to her enthusiastic client Ryan",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Pick up lines in the zoo",
				"Bad things to say while being arrested",
			],
		},
	],
};
