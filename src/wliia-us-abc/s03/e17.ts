import { type Episode } from "../../types/episode.js";

export const e17: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-17",
	airdate: "2001-02-01",
	productionNumber: "296722-323",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions Only",
			scenes: ["Kathy", "Wayne are a couple honeymooning at the Bates Motel"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A sumo wrestler wakes up on the day of a big match",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			musicians: "Laura and Linda",
			to: "Bree, from the audience",
			song: "You Are My Chili Dog",
		},
		{
			name: "Scenes Cut from a Movie",
			movies: [
				"_Gone with the Wind_",
				"_Sixth Sense_",
				"_Terminator_",
				"_Close Encounters of the Third Kind_",
				"_Green Mile_",
			],
		},
		{
			name: "The Millionaire Show",
			host: "Colin Mochrie",
			contestant: "Ryan Stiles",
			friendOnThePhone: "Kathy Greenwood",
			audienceMember: "Wayne Brady",
			theme: "Frat Boy",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Lottery](https://whoselineisitanyway.fandom.com/wiki/Lottery_Hoedown_(US_3-17))",
		},
	],
};
