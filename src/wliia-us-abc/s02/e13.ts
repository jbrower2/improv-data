import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Josie Lawrence"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-13",
	airdate: "1999-11-18",
	productionNumber: "296718-223",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Josie Lawrence", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions Only",
			scenes: [
				"In a lingerie section of a department store on Valentine's Day",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Zorro",
				"played by Ryan",
				"catches up with the leader of the Mexican guard",
				"played by Colin",
			],
			lines: [
				"Here's Johnny!",
				"My poodle's stuck in the heater vent.",
				"Let me be your love monkey.",
				"Seeing you naked changed my life.",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Josie Lawrence"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Odd hijacker demands",
				"Rejected themes for restaurants",
				"Video tapes that won't sell out at Blockbuster",
				"Interview questions you'd like to hear asked of a Miss America contestant",
				'The wrong thing to say when she says "I love you"',
				"Messages delivered a little late",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Josie Lawrence"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Chiropractor_",
			songs: [
				{
					style: "Tango",
					title: "Crackety Crack, Don't Talk Back",
				},
				{
					style: "Boogie Woogie",
					title: "Is That a Bulging Disc, or Are You Just Happy to See Me?",
				},
				{
					style: "Gilbert and Sullivan",
					title: "Readjustin' Justin While the Wind Is Gustin' Gustin",
				},
			],
		},
		{
			name: "Hoedown",
			performers: [
				"Josie Lawrence",
				"Drew Carey",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Laura Hall"],
			about:
				"[Children](https://whoselineisitanyway.fandom.com/wiki/Children_Hoedown)",
		},
	],
};
