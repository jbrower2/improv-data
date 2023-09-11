import { type Episode } from "../../types/episode";

export const e22: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 22,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-22",
	airdate: "2001-12-24",
	productionNumber: "296734-423",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Questions Only",
			scenes: [
				"Tensions rise in the cottage where Snow White",
				"the Seven Dwarves live",
			],
		},
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"A 1950s teenage couple, Kathy and Ryan, are kissing passionately in their car, motorcycle cop Wayne rides in because he suspects they're dangerous criminals who are carrying concealed weapons",
			notes: [
				"Do it like it's _America's Funniest Home Videos_",
				"Do it like it's the climax in a Sam Peckinpah movie",
				"Do it all like your mouth is numb from Novocaine",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Joe, a pool guy",
			styles: ["Eminem"],
		},
		{
			name: "Number of Words",
			scene:
				"From _Titanic_, Colin is Jack and Kathy is Rose and they're making out on the deck when Wayne, her horrified fiancee, and Ryan, the ship's captain, come to tell them that the boat has hit an iceberg",
			performers: [
				{
					name: "Colin Mochrie",
					words: 5,
				},
				{
					name: "Kathy Greenwood",
					words: 2,
				},
				{
					name: "Wayne Brady",
					words: 4,
				},
				{
					name: "Ryan Stiles",
					words: 3,
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Kathy Greenwood",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Kathy is a frustrated customer trying to get through the express line at a supermarket, Ryan is the loud-mouthed, busybody checker",
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Colin Mochrie"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
