import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Chip Esten"
	| "Julie Larson"
	| "Sean Masterson"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_04",
	airdate: "2004-10-28",
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
			name: "One-Syllable Word",
			scene: "At the dentist",
		},
		{
			name: "Hollywood Moments",
			performers: ["Julie Larson", "Colin Mochrie", "Drew Carey"],
			moderators: ["Jeff Davis"],
			scene: "A horrible toaster accident",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Jeff Davis"],
			audienceMembers: ["Holly", "Jeff"],
			scene: "In Alaska",
		},
		{
			name: "Story",
			leader: "Greg Proops",
			storytellers: [
				"Colin Mochrie",
				"Chip Esten",
				"Julie Larson",
				"Jeff Davis",
				"Sean Masterson",
				"Drew Carey",
				"Brad Sherwood",
			],
			title: "_The Tale of Onion Sam_",
		},
	],
};
