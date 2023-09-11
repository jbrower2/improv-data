import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Adrienne Houghton"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-10",
	airdate: "2019-08-26",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Adrienne Houghton"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Wild Afterdark",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Evil second head growing out of Greg",
			},
			sports: {
				name: "Ryan Stiles",
				quirk: "Great moments from human history",
			},
			weather: {
				name: "Wayne Brady",
				quirk:
					"Manic athletics coach putting his team through a brutal training session",
			},
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "~~Adrienne~~ Men should smile more",
			styles: ["Pop anthem"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Adrienne"],
			scene:
				"A couple enjoying themselves at the beach when they spot some swimmers in trouble out at sea",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If strippers used their moves for everyday tasks",
				"If every movie starred characters from _Star Wars_",
				"Weird things to do in a gym",
				"Sandwiches you'd never want to eat",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Ryan Stiles"],
			salesmen: ["Greg Proops", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Motel_",
			songs: [
				{
					style: "Elvis duo",
					title: "Pool on the Roof",
				},
				{
					style: "Simon and Garfunkel",
					title: "The Saddest Gift Shop in the World",
				},
			],
		},
	],
};
