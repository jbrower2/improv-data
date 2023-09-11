import { type Episode } from "../../types/episode.js";

export const e32: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 32,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-32",
	airdate: "2003-08-29",
	productionNumber: "296734-426",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Arthur Anymoredonuts",
			},
			coAnchor: {
				name: "Jeff Davis",
				quirk: "Christopher Walken trying out his standup routine",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Britney Christina van Fleufen",
				quirk:
					"Britney Spears & Christina Aguilera getting into a chickfight during a duet at an awards ceremony",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Twice Nightly",
				quirk:
					"A swinger checking people out and selecting who he'll take home for tonight's bedroom escapades",
			},
		},
		{
			name: "Duet",
			singers: ["Jeff Davis", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Katrina, a theater popcorn popper",
			styles: ["Big band"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Scenes from famous Hollywood movies as written by Dr. Seuss",
				"If boxing corner-men helped us get through our daily routines",
				"US cities that will never have a song written about them",
				"Odd things to hear from the voices in your head",
				"Bad times to smoke a cigarette",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Jeff Davis"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Motorcycle_",
			songs: [
				{
					style: "The ~~Three~~ Two Tenors",
					title: "The Harley of Seville",
				},
				{
					style: "Boogie-woogie",
					title: "Alabama Motorcycle Mama with a Llama",
				},
			],
		},
		{
			name: "Themed Restaurant",
			diners: ["Wayne Brady", "Drew Carey"],
			waiters: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Two businessmen out for a high-powered business lunch",
			theme: "Horror movies",
		},
	],
};
