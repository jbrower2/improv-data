import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Drew Carey"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Wayne Brady"
	| "Bob Derkach"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_01",
	airdate: "2011-04-11",
	host: "Drew Carey",
	performers: [
		"Jonathan Mangum",
		"Colin Mochrie",
		"Greg Proops",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	guests: ["Wayne Brady"],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Song Styles",
			singers: ["Jonathan Mangum", "Wayne Brady", "Brad Sherwood"],
			about: "Valerie, a wine writer",
			styles: ["Broadway"],
		},
		{
			name: "Moving People",
			performers: ["Ryan Stiles", "Jonathan Mangum"],
			moversFromTheAudience: ["Samara", "Chris"],
			scene: "Belgium and Kangaroos",
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Jumping up and down",
					name: "Wayne Brady",
				},
				{
					startingPosition: "Jumping Rope",
					name: "Brad Sherwood",
				},
			],
		},
		{
			name: "Kick It",
			performers: ["Jonathan Mangum", "Wayne Brady"],
			scene: "Tooth collector",
		},
	],
};
