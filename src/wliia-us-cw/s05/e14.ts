import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Marisol Nichols"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-14",
	airdate: "2017-09-21",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Marisol Nichols"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Wayne Wayne Goaway",
			},
			coAnchor: {
				name: "Jonathan Mangum",
				alternateName: "Spurky",
				quirk: "Moose that licks ice sculpture, Colin",
			},
			sports: {
				name: "Ryan Stiles",
				quirk: "The world's angriest teenage girl",
			},
			weather: {
				name: "Wayne Brady",
				quirk: "Acting out an entire James Bond movie in 30 seconds",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Marisol",
			styles: ["Disco"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Marisol"],
			scene:
				"Ryan and Colin are canoeing up the Amazon to their luxury jungle lodge",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jonathan Mangum"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Holidays_",
			songs: [
				{
					style: "Bollywood musical",
					title: "Don't Peek at Your Gifts",
				},
				{
					style: "_Hamilton_ tune",
					title: "Fourth of July Barbecue Blowout",
				},
			],
		},
	],
};
