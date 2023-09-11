import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Kathy Kinney"
	| "Julie Larson"
	| "Jonathan Mangum"
	| "Sean Masterson"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_09",
	airdate: "2005-10-17",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Kathy Kinney",
		"Julie Larson",
		"Jonathan Mangum",
		"Sean Masterson",
	],
	games: [
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Greg Proops", "Brad Sherwood"],
			audienceMembers: ["Carlos", "Sarah"],
			scene: "On a construction site",
		},
		{
			name: "Scenes",
			performers: [
				"Drew Carey",
				"Sean Masterson",
				"Greg Proops",
				"Jonathan Mangum",
				"Brad Sherwood",
				"Jeff Davis",
			],
			theme: "Half-wildebeest, half-mermaid",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Greg Proops", "Jeff Davis"],
			moderators: ["Brad Sherwood"],
			scene: "Foie gras factory",
		},
		{
			name: "Scenes",
			performers: [
				"Jonathan Mangum",
				"Jeff Davis",
				"Greg Proops",
				"Brad Sherwood",
				"Sean Masterson",
				"Drew Carey",
				"Kathy Kinney",
				"Julie Larson",
			],
			theme: "Computer virus",
		},
	],
};
