import { type Episode } from "../../types/episode.js";

export const e27: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 27,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-27",
	airdate: "2003-08-01",
	productionNumber: "296736-601",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Wayne are two bickering old prospectors and they're down a mine digging for gold in the Sierra Madre, and they're about to strike it rich, but Brad is the bandito who rides the rails into the mine shaft to rob 'em",
			notes: [
				"Do the scene backwards, totally backwards",
				"Do it like you have uncontrollable lust for each other",
				'Do it using as many "Yo Mama" jokes as you can',
			],
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene:
				"Brad and Colin are regulars at a local diner, Ryan enters as their favorite waitress",
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"With the fall of Saigon",
				"serviceman Ryan must say goodbye to his Vietnamese girlfriend Colin just before he boards the last helicopter out of the city",
			],
			lines: [
				"When was the last time you waxed that?",
				"Start squealing, pig boy!",
				"There's a bun in my oven.",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Marriage_",
			songs: [
				{
					style: "Honky-tonk",
					title: "Too Drunk to Honeymoon",
				},
				{
					style: "The Beach Boys",
					title: "I'm the Groom",
				},
				{
					style: "The B-52s",
					title: "Cash Bar",
				},
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
				"Drew is a high school student and Ryan is an arrogant Frenchmen giving him a lesson on French culture",
		},
	],
};
