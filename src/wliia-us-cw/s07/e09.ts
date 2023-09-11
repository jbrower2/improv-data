import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-09",
	airdate: "2019-08-19",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"In a post-apocalyptic world, Ryan and Jeff are a couple frantically looting an abandoned supermarket, when suddenly Jeff's furious mother, Wayne, who is turning into a zombie, smashes in",
			notes: [
				"Do it like you're all famous movie stars, your choice; try someone from this century",
				"Do it like Swedish porn",
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Brenda, who died tragically in a pharmacy-related accident",
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Colin is Pinocchio, Ryan is Geppetto, the rest is up to you gentlemen",
			secret: "Wig and lingerie",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Weird things to say to someone on their deathbed",
				"If horror movie characters were drunk",
				"If criminals spoke like Dr. Seuss",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Barista_",
			songs: [
				{
					style: "Johnny Cash and Kanye West",
					title: "Grounds for Divorce",
				},
				{
					style: "Rockabilly",
					title: "Macchiato-to-to-to-to-to-to-to-to-to",
				},
			],
		},
	],
};
