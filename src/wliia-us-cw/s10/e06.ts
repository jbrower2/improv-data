import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-06",
	airdate: "2021-11-13",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is a fast-food joint employee and he is held up by panicky criminal Greg, when Wayne enters as a husband-and-wife crime-fighting duo who burst in to save the day",
			notes: [
				"Do it like you're all doing _Jackass_ stunts",
				"Slow it up, then make it fast, make it fast, then slow it up",
			],
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Colin Mochrie",
				"Greg Proops",
				"Wayne Brady",
			],
			scene: "An annual meeting",
			film: "_Evil Brain from Outer Space_ (1964)",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Paula, who died tragically in a laundry-related accident",
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit to make oneself more attractive to their partner",
		},
		{
			name: "World's Worst",
			scenes: ["Clips from the world's worst horror movies"],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of New York_",
			songs: [
				{
					style: "Ozzy Osbourne",
					title: "The Ball Is Dropping",
				},
				{
					style: "Kabuki",
					title: "Where's the Snow",
				},
			],
		},
	],
};
