import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Jonathan Mangum"
	| "Sean Masterson"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_02",
	airdate: "2004-10-14",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Jonathan Mangum",
		"Sean Masterson",
	],
	games: [
		{
			name: "One-Syllable Word",
			scene: "At boot camp",
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Greg Proops", "Drew Carey"],
			moderators: ["Brad Sherwood"],
			scenes: ["Western"],
			firstLine: "You shot me in the heart.",
			lines: [
				"My hemorrhoids have flared up again.",
				"You're lookin' hellafied.",
				"I love you more than all the stars in the sky.",
				"Have I seen you here before?",
				"That's the best massage I've ever had.",
				"How can I miss you if you won't go away.",
				"Does something smell?",
				"Where're my car keys?",
			],
		},
		{
			name: "Filler Clip",
			performers: ["Jeff Davis", "Jonathan Mangum"],
			scene: "On the Scream-a-Puker 4000",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Colin Mochrie", "Brad Sherwood"],
			moderators: ["Jeff Davis"],
			scene: "_How to Have a Baby_",
		},
		{
			name: "Filler Clip",
			performers: ["Drew Carey", "Sean Masterson", "Jeff Davis"],
			scene: "100-yard dash runners",
		},
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Squatting",
					name: "Colin Mochrie",
				},
				{
					startingPosition: "On one leg",
					name: "Jonathan Mangum",
				},
			],
		},
	],
};
