import { type Episode } from "../../types/episode";

export const e19: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-19",
	airdate: "2016-09-21",
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
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt in an emergency room",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Jonathan Mangum"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "People smashing things",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Linda, who died tragically in a plastic surgery-related accident",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Sam", "Lauren"],
			scene:
				"Two Top Gun pilots relaxing on their aircraft carrier, when suddenly the alarm sounds that London is being attacked by giant killer insects",
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
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Big Box Supermarket_",
			songs: [
				{
					style: "Jamaican Dancehall",
					title: "Cleanup in Aisle Five",
				},
				{
					style: "Jay Z and Rick Astley",
					title: "Love at the Checkout",
				},
			],
		},
	],
};
