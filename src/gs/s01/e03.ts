import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Chip Esten"
	| "Julie Larson"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_03",
	airdate: "2004-10-21",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Chip Esten",
		"Julie Larson",
	],
	games: [
		{
			name: "Quiz Show",
			alternateName: "Game Show",
			host: "Brad Sherwood",
			contestants: ["Drew Carey", "Greg Proops", "Chip Esten"],
			title: "_Catch That Knife_",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Drew Carey"],
			audienceMembers: ["Qinqin", "Brian"],
			scene: "Animal training",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Greg Proops", "Jeff Davis"],
			moderators: ["Brad Sherwood"],
			scene: "In a babyproofing store",
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Indian style",
					name: "Julie Larson",
				},
				{
					startingPosition: "Touching his toes",
					name: "Greg Proops",
				},
			],
		},
	],
};
