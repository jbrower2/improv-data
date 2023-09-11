import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Andrea Navedo"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-03",
	airdate: "2018-06-11",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Andrea Navedo"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Bud Isthickerthanwater",
			},
			coAnchor: {
				name: "Gary Anthony Williams",
				quirk: "Crazy old man angry at everyone and everything",
			},
			sports: {
				name: "Ryan Stiles",
				quirk: "An entire NHL game in 30 seconds",
			},
			weather: {
				name: "Wayne Brady",
				quirk:
					"The story of a beauty queen who moves to Hollywood to pursue her dreams",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Andrea",
			styles: ["60s girl group"],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Andrea Navedo",
			scene:
				"Ryan is a choreographer auditioning Andrea for his new TV show, _The World's Sexiest Dancer_, when suddenly Latin dancer Wayne enters to show the world that he is the most irresistibly sexy man in the entire world",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Wayne Brady", "Gary Anthony Williams"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Flying saucers and aliens",
		},
		{
			name: "World's Worst",
			scenes: ["Things to say or do on a date"],
		},
		{
			name: "Helping Hands",
			performers: [
				"Andrea Navedo",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"In a fancy restaurant, newly-single Ryan is on his first date since his divorce, with his very sexy neighbor, Andrea",
		},
	],
};
