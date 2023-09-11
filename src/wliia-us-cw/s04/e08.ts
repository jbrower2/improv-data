import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Joey Fatone"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-08",
	airdate: "2016-07-26",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Joey Fatone"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Jeff are a bickering couple whose snowmobile breaks down during a blizzard when suddenly they're attacked by Bigfoot and his family all played by Wayne",
			notes: [
				"Do it like you're Chippendale chipmunks",
				"Do it like a Broadway musical",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis", "Joey Fatone"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Eric from the audience",
			styles: ["*NSYNC"],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Joey Fatone",
			scene:
				"Music producer Ryan is auditioning Joey to join *NSYNC when suddenly his rival, the lovely and sexy Justin Timberlake, played by Wayne, comes in to show that he should be frontman, and Joey confronts him with his own lovely sexiness",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Perfume scents that won't sell",
				"Tasks you shouldn't do in the nude",
				"If Olympic sports were done in a sexy way",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Joey Fatone",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Lonely New York divorcee Ryan has invited joey to her apartment for their first date",
		},
	],
};
