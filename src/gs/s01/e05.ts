import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Jonathan Mangum"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_05",
	airdate: "2004-11-04",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Chip Esten",
		"Kathy Kinney",
		"Jonathan Mangum",
	],
	games: [
		{
			name: "One-Syllable Word",
			scene: "At the veterinarian",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Brad Sherwood", "Jeff Davis"],
			moderators: ["Colin Mochrie"],
			scene: "Shakespeare in Bakersfield",
		},
		{
			name: "Story",
			leader: "Drew Carey",
			storytellers: [
				"Colin Mochrie",
				"Chip Esten",
				"Kathy Kinney",
				"Brad Sherwood",
				"Greg Proops",
				"Jeff Davis",
			],
			title: "_The Man Who Stole Florida_",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Drew Carey", "Jeff Davis"],
			audienceMembers: ["Leeann", "Philip"],
			scene: "A banana exploder",
		},
	],
};
