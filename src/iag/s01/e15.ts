import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Drew Carey"
	| "Kathy Kinney"
	| "Jonathan Mangum"
	| "Sean Masterson"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_15",
	airdate: "2011-04-29",
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
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Ryan Stiles", "Greg Proops"],
			moderators: ["Jonathan Mangum"],
			scene: "Racing sports cars",
			styles: ["Western", "Romance", "Spielberg", "_The Bible_", "80s music"],
		},
		{
			name: "Two-Headed Expert",
			expert: ["Drew Carey", "Kathy Kinney"],
			interviewer: ["Jonathan Mangum", "Sean Masterson"],
			scene: "A bathroom in North Dakota",
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Leapfrog",
					name: "Ryan Stiles",
				},
				{
					startingPosition: "Push-up",
					name: "Greg Proops",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Greg Proops", "Jonathan Mangum"],
			about: "Sylvia, a reflexologist",
			styles: ["Jazz"],
		},
	],
};
