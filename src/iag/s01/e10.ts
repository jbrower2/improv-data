import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Drew Carey"
	| "Kathy Kinney"
	| "Jonathan Mangum"
	| "Sean Masterson"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_10",
	airdate: "2011-04-22",
	host: "Drew Carey",
	performers: [
		"Kathy Kinney",
		"Jonathan Mangum",
		"Sean Masterson",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Jonathan Mangum", "Ryan Stiles"],
			moderators: ["Kathy Kinney"],
			scenes: ["The soap opera", "_The Bachelorette_"],
			lines: [
				"I drank some sweet tea.",
				"I'm a raging alcoholic.",
				"The long and winding road",
				"Scruffy nerf-herder",
				"Do you think the dog farted?",
				"Meat raffle",
			],
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Sean Masterson", "Kathy Kinney"],
			moderators: ["Drew Carey"],
			scene: "At a fitness place",
		},
		{
			name: "Mousetraps",
			performers: ["Sean Masterson", "Drew Carey"],
			scene: "World War II",
		},
	],
};
