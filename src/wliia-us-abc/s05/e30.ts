import { type Episode } from "../../types/episode.js";

export const e30: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Jerry Springer"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 30,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-30",
	airdate: "2003-08-15",
	productionNumber: "296736-612",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Jerry Springer"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Make a Monster",
			musicians: ["Laura Hall", "Linda Taylor"],
			drFrankenstein: "Colin Mochrie",
			igor: "Greg Proops",
			franksteinSMonster: {
				name: "Ryan Stiles",
				bodyParts: [
					{
						bodyPart: "Head",
						character: "Elvis",
					},
					{
						bodyPart: "Legs",
						character: "Olympic skater Brian Boitano",
					},
					{
						bodyPart: "Arms",
						character: "A dirty old man",
					},
				],
			},
			brideOfFrankenstein: {
				name: "Wayne Brady",
				bodyParts: [
					{
						bodyPart: "Head",
						character: "Mr. T",
					},
					{
						bodyPart: "Legs",
						character: "Fred Astaire",
					},
					{
						bodyPart: "Arms",
						character: "A Benihana chef",
					},
				],
			},
		},
		{
			name: "Dubbing",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			dubber: "Wayne Brady",
			dubbed: "Jerry Springer",
			scene:
				"Lovesick bored housewife Colin is amazed when a male Strip-o-Gram, played by Jerry Springer, arrives at her door, at that point her husband Ryan arrives home and starts to compete for his wife's attention",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unusual things to be coin-operated",
				"Talent segments we'll never see in the Miss America pageant",
				"If department store mannequins could talk",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Science Fiction_",
			songs: [
				{
					style: "Breakdance",
					title: "Asteroid Boogaloo",
				},
				{
					style: "Really incredibly fast jitterbug",
					title: "Obi-Wan Kenobi with the Flowing Brown Robe-y",
				},
			],
		},
		{
			name: "World's Worst",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Thing to say or do on your first day in prison"],
		},
	],
};
