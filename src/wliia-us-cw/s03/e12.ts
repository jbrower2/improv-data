import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Randy Couture"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-12",
	airdate: "2015-07-20",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Randy Couture"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Brice Isright",
			},
			coAnchor: {
				name: "Jonathan Mangum",
				alternateName: "Jeremy Potts",
				quirk: "Aggressive border guard busting Colin for smuggling",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Aisha's craziest family members disturbing her at work",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "The most over-the-top gangster movie death scene ever",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Randy",
			styles: ["Stadium rock"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Randy"],
			scene:
				"Caveman Ryan and his wife Colin are hunting for food in the dangerous wilderness before finding a cave to make their home",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Jessica, who died in a terrible exterminator-related accident",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Hillbilly pick up lines",
				"Things you wouldn't want to hear at Christmas",
			],
		},
	],
};
