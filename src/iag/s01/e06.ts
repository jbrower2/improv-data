import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_06",
	airdate: "2011-04-18",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Colin Mochrie",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Throwing a javelin",
					name: "Greg Proops",
				},
				{
					startingPosition: "Jumping Jacks",
					name: "Ryan Stiles",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Chip Esten", "Ryan Stiles"],
			audienceMembers: ["Cynthia", "Nicole"],
			scene: "Firemen",
		},
		{
			name: "Two-Headed Expert",
			expert: ["Drew Carey", "Jeff Davis"],
			interviewer: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Burlesque",
		},
		{
			name: "Greatest Hits",
			singers: ["Chip Esten", "Jeff Davis"],
			salesmen: ["Ryan Stiles", "Greg Proops"],
			musicians: ["Bob Derkach"],
			album: "_Songs of the Lumberjack_",
			songs: [
				{
					style: "Tunes for Tots",
					title: "Flap My Jack",
				},
			],
		},
	],
};
