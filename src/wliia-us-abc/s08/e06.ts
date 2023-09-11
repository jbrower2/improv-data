import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Santa Claus and Donner"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anne King"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-06",
	airdate: "2005-12-12",
	productionNumber: "296751-8010",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Santa Claus and Donner"],
	musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
	games: [
		{
			name: "Questions with Wigs",
			scene: "An extended family gets together for Christmas dinner",
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
			about: "Santa Claus and Donner",
			styles: ["Swing"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Shawna", "Nancy"],
			scene:
				"Two doctors at a party on a snowy Christmas Eve suddenly get called to a frantic maternity ward on the other side of town",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"People you don't want to get caught with under the mistletoe",
				"Celebrities who shouldn't release rap records",
				"Thoughts that keep Drew up at night",
				"What Santa really does when he arrives down your chimney",
				"Odd things to have written in icing on a cake",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Dynamic corporate boss Ryan has invited his newest recruit to the company, Drew, over for Christmas dinner",
		},
	],
};
