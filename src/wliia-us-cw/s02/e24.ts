import { type Episode } from "../../types/episode.js";

export const e24: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 24,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-24",
	airdate: "2014-11-21",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad things to say or do while your partner is giving birth",
				"Unlikely things for your dentist to say or do",
				"What people are really thinking when making love",
				"Strange lines to hear in a sci-fi movie",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: [
				"On a doomed planet",
				"Ryan is preparing to send his son Colin to safety on Earth",
			],
			lines: [
				"Hubba hubba, those are enormous!",
				"Come on baby, let's ~~tweak~~ twerk.",
				"Who brought the pig?",
				"I think I'm gonna be sick.",
			],
		},
		{
			name: "Forward Rewind",
			scene:
				"Coach Colin is teaching pro-wrestler Wayne some new moves, Ryan enters as Wayne's pumped-up rival who challenges him, and Heather is Wayne's passionate girlfriend who rushes in",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Heather Anne Campbell"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Worms, grubs, and maggots",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Roommate_",
			songs: [
				{
					style: "Belly dance",
					title: "Evicted",
				},
				{
					style: "Adele",
					title: "I Found Him in Bed with My Best Girl",
				},
			],
		},
	],
};
