import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Jillian Michaels"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-10",
	airdate: "2017-08-20",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Jillian Michaels"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Heather Anne Campbell",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene:
				"Colin and Ryan are a young couple frolicking in their hot tub which starts to malfunction for obvious reasons when Wayne enters as a clumsy electrician to repair it",
			notes: ["Do it as if you're Vegas performers", "I want a cabaret scene"],
		},
		{
			name: "World's Worst",
			scenes: ["Relative"],
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Jillian",
			styles: ["Workout video"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Inappropriate times to take your clothes off",
				"Weird reasons for the news to interrupt regular TV",
				"Things that you can say about your job, that you cannot say about your partner",
				"Statements that are clearly untrue",
			],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Jillian Michaels",
			scene:
				"Ryan is a tough drill sergeant in an all-female army corps putting new recruit Jillian through her paces when suddenly glamorous Private Wayne enters to show that she is indeed the fittest",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Carla, who died tragically in a hardware-related accident",
		},
	],
};
