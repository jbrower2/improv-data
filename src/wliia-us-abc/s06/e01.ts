import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-01",
	airdate: "2004-06-24",
	productionNumber: "296736-602",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Sheriff Ryan is pursuing dangerous, violent outlaw Wayne across the roof of a speeding train when Wayne's partner Chip rides up alongside on a horse to help him",
			notes: [
				"Do it like you're college girls going wild at a Mardi Gras",
				"Do it like you're male models going down a catwalk",
				"It needs your mastery of impressions, you're Mr. Ed (Chip), you're Mr. Magoo (Ryan), you're Mr. T (Wayne)",
			],
		},
		{
			name: "Doo-wop",
			singers: ["Chip Esten", "Wayne Brady", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Diana, who died tragically in a bowling accident",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about your business, but not your girlfriend",
				"Shows on which you'd never expect Barney the Dinosaur to make a cameo",
				"Hillbilly proverbs",
				"What Drew whispers in his date's ear",
				"Bad times for that laxative to kick in",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Horror_",
			songs: [
				{
					style: "Jitterbug",
					title: "The Moon Is Full and I'm Getting Hairy",
				},
				{
					style: "Pat Benatar",
					title: "Hit Me with Your Best Bolt",
				},
				{
					style: "Red Hot Chili Peppers",
					title: "Devil! There's a Devil! Whoa, Devil! Whoa That's a Devil!",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Hunter Ryan has taken his girlfriend Drew for a romantic camping weekend in the wild where he plans to propose",
		},
	],
};
