import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-10",
	airdate: "2018-07-30",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Gary Anthony Williams",
			scene:
				"Ryan is a hard-bitten Texas prison warden who catches convict Colin breaking out of his cell, when suddenly Colin's wife Wayne smashes through the prison wall in a monster truck",
			notes: [
				"This time Colin, I want you to be John Wayne, yes? You, I want you (Ryan) to be the great actor Chewbacca, and you (Wayne), you of course, you are a munchkin",
				"From here on out, I want to see you do this next scene as a big Hollywood musical",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Gary Anthony Williams"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: [
				"Colin is Robin Hood trying to persuade the beautiful very sexy",
				"highly feminine Maid Marian",
				"played by Ryan",
				"to join his band of outlaws",
			],
			lines: [
				"Quick, grease me up!",
				"Canadians make the best lovers!",
				"I'd give that bathroom a few minutes...",
				"The dark lord Satan will rise again!",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you don't want to see your grandma doing",
				"What the _Whose Line_ audience is really thinking",
				"Unlikely things to read out in a sexy way",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Fast Food Restaurant_",
			songs: [
				{
					style: "_Les Mis_",
					title: "Would You Like Fries with That?",
				},
				{
					style: "Russian folk",
					title: "Trade a Burger for Some Toilet Paper",
				},
			],
		},
	],
};
