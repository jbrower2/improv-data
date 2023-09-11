import { type Episode } from "../../types/episode";

export const e19: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anne King"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-19",
	airdate: "2001-02-21",
	productionNumber: "296722-326RX",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is a nervous bank robber holding up Wayne, the teller, Greg is a cop who bursts in",
			notes: [
				"A soap opera, you're pregnant (Ryan), you're not (Wayne), you have a limp (Greg)",
				"Speed up, but then slow down",
				"Be strippers, you two speed up and slow down (Ryan and Greg), and you strip as Goofy (Wayne)",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
			about: "Bank tellers",
			styles: ["_West Side Story_"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Mickey", "Catherine"],
			scene:
				"Ryan is Tarzan, and Colin is Jane, and they're hunting for food when they hear trouble in the jungle",
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			to: "Christina from the audience",
			song: "You Fill My Life with Jell-O",
		},
	],
};
