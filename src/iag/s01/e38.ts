import { type Episode } from "../../types/episode.js";

export const e38: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 38,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_38",
	airdate: "2011-06-01",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Kathy Kinney",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Moving People",
			performers: ["Jeff Davis", "Kathy Kinney"],
			moversFromTheAudience: ["Kristi", "Drew"],
			scene: "Amusement Park Day",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Kathy Kinney", "Ryan Stiles"],
			audienceMembers: ["Jeff", "Heather"],
			scene: "A rancher",
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "On his knees",
					name: "Greg Proops",
				},
				{
					startingPosition: "Jumping jacks",
					name: "Jeff Davis",
				},
			],
		},
		{
			name: "Show-Stopping Number",
			alternateName: "Bob's Call",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene: "Collecting bathing suits",
		},
	],
};
