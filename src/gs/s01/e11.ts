import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Chip Esten"
	| "Kathy Kinney"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_11",
	airdate: "2005-11-01",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Chip Esten",
		"Kathy Kinney",
	],
	games: [
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Jeff Davis", "Brad Sherwood"],
			audienceMembers: ["Sally", "Paul"],
			scene: "Bodyguard",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Chip Esten", "Greg Proops"],
			moderators: ["Brad Sherwood"],
			scene: "An African safari",
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Drew Carey", "Colin Mochrie"],
			moderators: ["Chip Esten"],
			scenes: ["Inventors"],
			lines: [
				"I have a craving for Froot Loops.",
				"I stick pebbles up my nose.",
				"Do I look fat in this outfit?",
				"I'm a punk-rock Yiddish girl trying to survive in the projects of Sarasota, Florida.",
				"I used to be a lifeguard.",
				"I lust after San Diego men.",
				"Can I borrow your bologna sandwich?",
				"Your hair is whistling 'Dixie'.",
				"I have fallen and I can't get up.",
			],
		},
		{
			name: "Story",
			leader: "Jeff Davis",
			storytellers: [
				"Colin Mochrie",
				"Chip Esten",
				"Kathy Kinney",
				"Brad Sherwood",
				"Greg Proops",
				"Drew Carey",
			],
			title: "_The Superb Ego_",
		},
	],
};
