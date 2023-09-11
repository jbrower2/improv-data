import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-20",
	airdate: "2020-11-16",
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
			scene: "Passions erupt in a rough part of town",
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Colin Mochrie", "Jonathan Mangum", "Wayne Brady"],
			phoneDonors: ["Eric", "Hannah"],
			scene:
				"Top scientist Colin has called his smartest colleagues Wayne and Jonathan to ask for their help in containing a deadly virus outbreak",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"How to make your roommate move out",
				"The world's worst personal trainer",
				"What horror movie characters do when they're alone",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Wayne Brady", "Jonathan Mangum"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Bats and vampires",
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
			album: "_Songs of the Astronaut_",
			songs: [
				{
					style: "Run DMC and Aerosmith",
					title: "Houston, We've Got a Problem",
				},
				{
					style: "New wave",
					title: "One Small Step for Man",
				},
			],
		},
	],
};
