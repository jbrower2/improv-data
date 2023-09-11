import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-04",
	airdate: "2021-10-23",
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
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"High school sports jock Ryan is making out with sweetheart Heather in the schoolgirls' locker room when he starts to turn into a werewolf; Heather's butch yet feminine roommate Wayne is gonna come out of the showers just in time to save her",
			notes: [
				"Do it like you're in a commercial",
				"Do it as frisky old people",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Raleigh", "Annette"],
			scene:
				"Two big city firefighters checking out their gear in the station when they get a call that a fire is breaking out at the zoo",
		},
		{
			name: "Questions with Hats",
			scene:
				"In a college dorm on the first day back from vacation where some foreign students have arrived",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If love songs were about life's embarrassments",
				"Discarded scenes from famous movies",
				"If medical exams were carried out by celebrities",
				"Things you don't want to hear on a cruise",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_The Mall_",
			songs: [
				{
					style: "Nicki Minaj",
					title: "I Got Sick in the Food Court",
				},
				{
					style: "Japanese pop",
					title: "Trapped on an Escalator",
				},
			],
		},
	],
};
