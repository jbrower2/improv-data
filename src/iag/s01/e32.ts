import { type Episode } from "../../types/episode.js";

export const e32: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Bob Derkach"
> = {
	number: 32,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_32",
	airdate: "2011-05-24",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Kathy Kinney",
		"Colin Mochrie",
		"Brad Sherwood",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Greatest Hits",
			singers: ["Chip Esten", "Brad Sherwood"],
			salesmen: ["Jeff Davis", "Colin Mochrie"],
			musicians: ["Bob Derkach"],
			album: "_Songs about Steelworkers_",
			songs: [
				{
					style: "Mambo",
					title: "Our Love is Like Hot Rivets in the Pants",
				},
				{
					style: "70s rock and roll power ballad",
					title: "Blowin' My Stack",
				},
			],
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Chip Esten", "Jeff Davis"],
			moderators: ["Colin Mochrie"],
			scenes: ["The soap opera", "_My Revolving World_"],
			lines: [
				"So what's the big thing about working for TSA?",
				"What the heck is that smell?",
				"Will you pay our bar bill?",
				"Those aren't pillows.",
				"Darling, you know I care for you, but that really is ghastly.",
				"My son is a velociraptor who plays the banjo.",
				"I am Dr. Napkinface.",
				"I know you think you look good, but you really need to work on that hair.",
				"You think losing weight is hard for a man?  Try being a woman, where the fat stays.",
			],
		},
		{
			name: "Show-Stopping Number",
			alternateName: "Bob's Call",
			performers: ["Colin Mochrie", "Kathy Kinney"],
			scene: "A gondola",
		},
		{
			name: "Moving People",
			alternateName: "Moving Bodies",
			performers: ["Drew Carey", "Brad Sherwood"],
			moversFromTheAudience: ["Terry", "Mark"],
			scene: "Something involving the ocean",
		},
	],
};
