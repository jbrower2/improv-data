import { type Episode } from "../../types/episode";

export const e26: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 26,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_26",
	airdate: "2011-05-16",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Jonathan Mangum",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Moving People",
			performers: ["Ryan Stiles", "Jeff Davis"],
			moversFromTheAudience: ["Sarah", "Tapley"],
			scene: "Make the bed",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Chip Esten", "Drew Carey"],
			audienceMembers: ["Krista", "Luke"],
			scene: "Kitchen and Electron",
		},
		{
			name: "Tag",
			alternateName: "Freeze",
			startingPositions: [
				{
					startingPosition: "Yoga",
					name: "Jonathan Mangum",
				},
				{
					startingPosition: "Downward Dog",
					name: "Jeff Davis",
				},
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Jeff Davis", "Jonathan Mangum", "Chip Esten"],
			salesmen: ["Ryan Stiles", "Greg Proops", "Drew Carey"],
			musicians: ["Bob Derkach"],
			album: "_Songs of the Stripper_",
			songs: [
				{
					style: "Elizabethan",
					title: "You Gotta Tip Me a Twenty",
				},
			],
		},
	],
};
