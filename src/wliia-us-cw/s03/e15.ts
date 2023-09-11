import { type Episode } from "../../types/episode";

export const e15: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Nina Agdal"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-15",
	airdate: "2015-08-17",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Nina Agdal"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "World's Worst",
			scenes: ["Roommate"],
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Nina",
			styles: ["Latin pop"],
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Nina Agdal", "Heather Anne Campbell"],
			scene:
				"High school sweethearts Ryan and Nina are making out in Ryan's car and suddenly a werewolf, Heather, breaks in to attack them",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unexpected things to read in a first aid manual",
				"If people in a hospital spoke like Dr. Seuss",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Nina Agdal",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"A flamboyant wedding planner going through the arrangements for a wedding with nervous bride-to-be Nina",
		},
	],
};
