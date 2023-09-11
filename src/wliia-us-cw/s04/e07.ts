import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-07",
	airdate: "2016-07-20",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Jonathan are two hunters in a canoe trying to catch alligators, suddenly crazy old Cajun Wayne arrives with his pet gator to chase them off his land",
			notes: [
				"Do it like a high school musical",
				"Do it like you're Chippendale dancers",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Odd things to protest about",
				"Things you wouldn't hear on a Bear Grylls-style survival show",
				"Things you can say while playing golf, that you can't say about your partner",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Jonathan Mangum"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "A variety of sea creatures",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jonathan Mangum"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Horror_",
			songs: [
				{
					style: "Ska",
					title: "The Eyes Are Moving",
				},
				{
					style: "_Les Miserables_",
					title: "The Werewolf of Mersailles",
				},
				{
					style: "Bob Dylan and The Swedish Chef",
					title: "We Need Brains",
				},
			],
		},
	],
};
