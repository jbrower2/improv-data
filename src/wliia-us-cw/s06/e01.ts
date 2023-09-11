import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Ross Mathews"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-01",
	airdate: "2018-06-04",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Ross Mathews"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Lightly Salted",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Greg's baby being born",
			},
			sports: {
				name: "Ryan Stiles",
				quirk:
					"Short tempered bouncer dealing with troublemakers in the studio",
			},
			weather: {
				name: "Wayne Brady",
				quirk: "Acting out an entire _Terminator_ movie in 30 seconds",
			},
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Ross",
			styles: ["Disco"],
		},
		{
			name: "Themed Restaurant",
			diners: ["Greg Proops", "Ross Mathews"],
			waiters: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene: "Two executives having a business meeting",
			theme: "Superheroes",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things that you shouldn't do at a nudist beach",
				"Terrible places to bring a date",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Colin Mochrie", "Ryan Stiles"],
			props: ["Wayne", "Ross"],
			scene:
				"Frontiersman Colin and his son Ryan are hunting wild animals and building a camp during a harsh winter",
		},
	],
};
