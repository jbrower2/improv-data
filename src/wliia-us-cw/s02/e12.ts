import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Robbie Amell"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-12",
	airdate: "2014-06-09",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Robbie Amell"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "A busy night in a hospital",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Robbie",
			styles: ["One Direction"],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Robbie Amell",
			scene:
				"Ryan is an Army drill sergeant putting Robbie through basic training and then Wayne enters as Robbie's female rival determined to prove that she's the best cadet",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad things to say in a job interview",
				"If _Sesame Street_ were a soap opera",
				"Chants schoolgirls never sing during jump rope",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Robbie Amell",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is Robbie's Italian mother passing down her family's secret Italian recipes",
		},
	],
};
