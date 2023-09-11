import { type Episode } from "../../types/episode.js";

export const e23: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Rich Fields"
	| "Steve Kamer"
	| "Bob Derkach"
> = {
	number: 23,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_23",
	airdate: "2011-05-11",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Kathy Kinney",
		"Colin Mochrie",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	guests: ["Rich Fields", "Steve Kamer"],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Two-Headed Expert",
			expert: ["Ryan Stiles", "Jeff Davis"],
			interviewer: ["Colin Mochrie", "Brad Sherwood"],
			scene: "Organic chemistry",
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Missionary",
					name: "Colin Mochrie",
				},
				{
					startingPosition: "Jumping jacks",
					name: "Drew Carey",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Drew Carey", "Brad Sherwood"],
			audienceMembers: ["Rich", "Steve"],
			scene: "Alexander's burning of Persepolis",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Colin Mochrie", "Drew Carey"],
			moderators: ["Brad Sherwood"],
			scene: "Sewing machines",
			styles: [
				"Shakespeare",
				"Dr. Seuss",
				"French dialect",
				"Kabuki",
				"Kabuki Dr. Seuss",
			],
		},
	],
};
