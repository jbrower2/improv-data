import { type Episode } from "../../types/episode";

export const e16: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kunal Nayyar"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-16",
	airdate: "2014-07-21",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Kunal Nayyar"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Frank Opinion",
			},
			coAnchor: {
				name: "Brad Sherwood",
				alternateName: "Natasha",
				quirk: "Colin's excited mail-order bride",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Masochist visiting different people for punishment sessions",
			},
			weather: {
				name: "Ryan Stiles",
				quirk:
					"Trying to gather a mob of villagers to storm the castle of the evil vampire, Colin",
			},
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kunal",
			styles: ["Hard rock"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If famous TV shows had been performed in the nude",
				"Unlikely medical commercials",
				"Things guaranteed to get you fired from your job",
				"Inappropriate moments to become too intimate",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Kunal Nayyar",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Nerdy college freshman Kunal is visiting womanizing senior student Ryan for tips on how to be more successful with women",
		},
	],
};
