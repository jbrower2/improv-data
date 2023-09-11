import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Chip Esten"
	| "Julie Larson"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_01",
	airdate: "2004-10-07",
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
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Kneeling",
					name: "Brad Sherwood",
				},
				{
					startingPosition: "Lying down",
					name: "Greg Proops",
				},
			],
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Julie Larson", "Drew Carey"],
			moderators: ["Brad Sherwood", "Jeff Davis", "Greg Proops"],
			scenes: ["Zeppelin"],
			lines: [
				"What planet are you from?",
				"The game isn't over until the fat lady sings.",
				"Your hair looks nice today.",
				"I am a real blonde.",
				"My mind's a blank.",
				"What happened to gay goats?",
				"What's that thing in your pants?",
				"The domain server took a dump.",
				"Can I use your toenail clippers?",
				"My doctor won't like that.",
				"You just searched my glove compartment.",
			],
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Colin Mochrie", "Brad Sherwood"],
			moderators: ["Jeff Davis"],
			scene: "_How ta Box_",
		},
		{
			name: "One-Syllable Word",
			scene: "At the racetrack",
		},
	],
};
