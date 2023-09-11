import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Jonathan Mangum"
	| "Sean Masterson"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_06",
	airdate: "2005-09-26",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Chip Esten",
		"Kathy Kinney",
		"Jonathan Mangum",
		"Sean Masterson",
	],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Styles",
			performers: ["Jeff Davis", "Chip Esten"],
			moderators: ["Brad Sherwood"],
			scene: "Afraid of underwear",
			styles: [
				"Western",
				"Musical",
				"Dance break",
				"Horror",
				"French",
				"Italian",
				"Romance",
				"Close-together dance break",
				"Opera",
			],
		},
		{
			name: "Quiz Show",
			alternateName: "Game Show",
			host: "Greg Proops",
			contestants: ["Jeff Davis", "Brad Sherwood", "Sean Masterson"],
			title: "_You Bet Your Pants_",
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Plie",
					name: "Jonathan Mangum",
				},
				{
					startingPosition: "Karate Kid",
					name: "Kathy Kinney",
				},
			],
		},
		{
			name: "Story",
			leader: "Drew Carey",
			storytellers: [
				"Jeff Davis",
				"Greg Proops",
				"Brad Sherwood",
				"Sean Masterson",
				"Jonathan Mangum",
				"Colin Mochrie",
			],
			title: "_Bertha and the Haunted Municipal Building_",
		},
	],
};
