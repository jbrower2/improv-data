import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Kathy Kinney"
	| "Jonathan Mangum"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_08",
	airdate: "2005-10-10",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Kathy Kinney",
		"Jonathan Mangum",
	],
	games: [
		{
			name: "Quiz Show",
			alternateName: "Game Show",
			host: "Brad Sherwood",
			contestants: ["Jeff Davis", "Kathy Kinney", "Greg Proops"],
			title: "_Guess My Disorder_",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Brad Sherwood", "Jeff Davis"],
			audienceMembers: ["Meredith", "Eric"],
			scene: "At the airport",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Brad Sherwood", "Colin Mochrie"],
			moderators: ["Jeff Davis"],
			scene: "_How to Clean a Fish_",
		},
		{
			name: "Moving People",
			performers: ["Greg Proops", "Jeff Davis"],
			moversFromTheAudience: ["Sandy", "Tony"],
			scene: "Whiner Day",
		},
	],
};
