import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kearran Giovanni"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-06",
	airdate: "2017-07-17",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Kearran Giovanni"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Bjorn Betweentwolovers",
			},
			coAnchor: {
				name: "Jonathan Mangum",
				alternateName: "Baby Tom",
				quirk: "A toddler who thinks Colin is a giant popsicle",
			},
			sports: {
				name: "Ryan Stiles",
				quirk: "Acting out the secret superhero life of Ryan Stiles",
			},
			weather: {
				name: "Wayne Brady",
				quirk: "Accidentally starts a fire in the studio",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kearran",
			styles: ["Broadway musical"],
		},
		{
			name: "World's Worst",
			scenes: ["Clips from the world's worst cop show"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Kearran"],
			scene:
				"American pioneers exploring the Old West, surviving the elements, and building a cabin",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "Coast Guard Sailor Guys",
			songs: [
				{
					style: "Snoop Dogg and his dog",
					title: "Is the Bow the Pointy End?",
				},
				{
					style: "Bollywood",
					title: "Only One Life Jacket",
				},
			],
		},
	],
};
