import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-03",
	airdate: "2000-10-19",
	productionNumber: "296722-312",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			actors: ["Ryan Stiles", "Chip Esten", "Wayne Brady"],
			scene:
				"Chip is a government scientist testing out his new robocop, Ryan, and Wayne is a high-tech thief who breaks in to steal it",
			notes: [
				"Do it like you're clueless teenage girls",
				"Do it like 70s disco dancers",
				"Do it lustfully",
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Maria, a hula instructor",
			styles: ["Van Halen"],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In the Oval Office",
		},
		{
			name: "Themed Restaurant",
			diners: ["Wayne Brady", "Chip Esten"],
			waiters: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Having a high-powered business lunch",
			theme: "Olympics",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Firefighters_",
			songs: [
				{
					style: "The Beach Boys",
					title: "Slidin' Down the Pole",
				},
				{
					style: "Queen",
					title: "We Will Hose You",
				},
				{
					style: "Latin pop",
					title: "Four Days On, Two Weeks Off",
				},
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			to: "Mieko, from the audience",
			song: "Whenever I See Your Teeth",
		},
	],
};
