import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kathie Lee Gifford"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-11",
	airdate: "2015-07-13",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Kathie Lee Gifford"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "One night in a seedy motel",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kathie Lee",
			styles: ["A boy band"],
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Wayne Brady", "Kathie Lee Gifford"],
			scene:
				"Sexy CIA agent Kathie Lee is seducing Russian spy Ryan, trying to steal secret codes that he has hidden somewhere on his person, Wayne enters as a rival female spy who also wants the codes",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Odd things to be turned on by",
				"Unlikely things to hear on a morning show",
				"Weird things to see in a nature documentary",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Kathie Lee Gifford",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"An upbeat celebrity chef appearing on Kathie Lee's morning show demonstrating how to prepare the perfect breakfast",
		},
	],
};
