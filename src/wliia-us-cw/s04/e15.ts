import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Lea Thompson"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-15",
	airdate: "2016-08-24",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Lea Thompson"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Terry Fiedofwater",
			},
			coAnchor: {
				name: "Jonathan Mangum",
				alternateName: "Rover",
				quirk: "Colin's over-excited talking dog",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Bigly Little",
				quirk: "A series of people hitting on Aisha in a bar",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Stormy",
				quirk: "_Back to the Future_ in 30 seconds",
			},
		},
		{
			name: "World's Worst",
			scenes: [
				"Clips from the world's worst actors' showreel or audition tape",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Lea Thompson",
			styles: ["Techno"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"The world's worst children's entertainer",
				"The world's stupidest record attempts",
				"Bad acceptance speeches at awards ceremonies",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Lea Thompson",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ladies man Ryan is showing his flirtatious neighbor Lea how to cook the perfect barbecue",
		},
	],
};
