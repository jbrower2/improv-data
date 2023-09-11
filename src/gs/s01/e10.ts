import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Chip Esten"
	| "Julie Larson"
	| "Sean Masterson"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_10",
	airdate: "2005-10-24",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Chip Esten",
		"Julie Larson",
		"Sean Masterson",
	],
	games: [
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Kneeling",
					name: "Colin Mochrie",
				},
				{
					startingPosition: "On one foot",
					name: "Julie Larson",
				},
			],
		},
		{
			name: "Quiz Show",
			alternateName: "Game Show",
			host: "Greg Proops",
			contestants: ["Drew Carey", "Colin Mochrie", "Chip Esten"],
			title: "_Clean My House_",
		},
		{
			name: "Scenes",
			performers: [
				"Brad Sherwood",
				"Jeff Davis",
				"Greg Proops",
				"Colin Mochrie",
				"Julie Larson",
				"Chip Esten",
			],
			theme: "Good & Evil, and Sad",
		},
		{
			name: "Filler Clip",
			performers: ["Jeff Davis", "Greg Proops", "Drew Carey"],
			scene: "Acme Airways for Green Skies",
		},
	],
};
