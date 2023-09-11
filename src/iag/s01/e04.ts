import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Drew Carey"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Wayne Brady"
	| "Bob Derkach"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_04",
	airdate: "2011-04-14",
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
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Kneeling",
					name: "Jonathan Mangum",
				},
				{
					startingPosition: "Downward Dog",
					name: "Wayne Brady",
				},
			],
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Drew Carey", "Ryan Stiles"],
			moderators: ["Brad Sherwood"],
			scene: "Stone carver",
		},
		{
			name: "Moving People",
			alternateName: "Moving Bodies",
			performers: ["Brad Sherwood", "Drew Carey"],
			moversFromTheAudience: ["Kerry", "Melissa"],
			scene: "Sausage Day in Austria",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			about: "Michelle, a stay-at-home mom",
			styles: ["Sexy soul ballad"],
		},
	],
};
