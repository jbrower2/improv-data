import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Sheryl Underwood"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-14",
	airdate: "2014-06-23",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Sheryl Underwood"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Jeff are two bickering French workmen testing the bells at Notre Dame Cathedral when suddenly they're attacked by Quasimodo, the hunchback, played by Wayne",
			notes: [
				"Do it like it's a Spanish game show",
				"_America's Funniest Home Videos_",
				"Do it like your butts have a mind of their own",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Sheryl"],
			scene:
				"Ryan and his heavily-pregnant wife Colin are travelling around Europe when Colin goes into labor and they must rush to the nearest hospital",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Sports team names that would never catch on",
				"Things you can say about a movie, but not about your partner",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Jeff Davis"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Beach_",
			songs: [
				{
					style: "Johnny Cash and Drake",
					title: "Fair Skin and No Lotion",
				},
				{
					style: "German metal",
					title: "Kelp!",
				},
			],
		},
	],
};
