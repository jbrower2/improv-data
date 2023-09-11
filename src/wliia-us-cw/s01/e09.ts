import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laila Ali"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-09",
	airdate: "2013-08-27",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Laila Ali"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely cartoon characters to cameo in an adult movie",
				"Weird things to happen at a doctor's exam",
				"Things that you might regret saying on a first date",
			],
		},
		{
			name: "Dubbing",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			dubber: "Wayne Brady",
			dubbed: "Laila Ali",
			scene:
				"Flirtatious fashion photographer Colin is taking pictures of supermodel Laila, when her jealous model boyfriend, Ryan, angrily kicks down the door and confronts them",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			album: "_Songs of Acne_",
			songs: [
				{
					style: "Mariachi",
					title: "Pop It",
				},
				{
					style: "_Les Miserables_",
					title: "Oily Cheeks",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Laila Ali",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is Laila's grizzled trainer helping her prepare for her first big fight",
		},
	],
};
