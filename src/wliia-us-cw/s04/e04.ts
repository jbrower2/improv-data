import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Yvette Nicole Brown"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-04",
	airdate: "2016-06-13",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Yvette Nicole Brown"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Gary is a preacher performing an exorcism on possessed teenage girl Ryan, when suddenly Wayne materializes as the demon who has been unleashed",
			notes: [
				"Do it like you're guests on _Maury Povich_",
				"Do it like famous movie stars",
				"Do it really an upbeat musical _[sic]_",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Yvette",
			styles: ["Jamaican dancehall"],
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Gary Anthony Williams",
				"Colin Mochrie",
				"Wayne Brady",
			],
			scene: "One day in the hospital",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Strange things for a priest to say",
				"If boy bands sang about embarrassing problems",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Yvette Nicole Brown",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan has taken his girlfriend Yvette out for a lovely romantic picnic in order to propose",
		},
	],
};
