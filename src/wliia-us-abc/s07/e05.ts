import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-05",
	airdate: "2005-01-31",
	productionNumber: "296744-7005",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Song Titles",
			scene: "At an office Christmas party and the party's in full swing",
		},
		{
			name: "Two-Line Vocabulary",
			performers: ["Colin Mochrie", "Wayne Brady", "Ryan Stiles"],
			scene:
				"Colin is leading two passengers to safety on the capsized _SS Poseidon_.",
			lines: [
				{
					name: "Wayne Brady",
					lines: ["I'm right behind ya.", "What about me?"],
				},
				{
					name: "Ryan Stiles",
					lines: ["What did you say?", "Hey, lighten up."],
				},
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Lily, a crossing guard",
			styles: ["Backstreet Boys"],
		},
		{
			name: "Action Replay",
			actors: ["Chip Esten", "Wayne Brady"],
			reEnacters: ["Ryan Stiles", "Colin Mochrie"],
			originalScene:
				"Two campers get dressed in the morning and discover that insects have crawled into their clothes",
		},
		{
			name: "Greatest Hits",
			singers: ["Chip Esten", "Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Pregnancy_",
			songs: [
				{
					style: "The Clash",
					title: "No, You Don't Look Fat",
				},
				{
					style: "Reggae",
					title: "You Wanna Cut the Cord?",
				},
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Chip Esten", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Lola, who died tragically in a freak golf accident",
		},
	],
};
