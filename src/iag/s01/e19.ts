import { type Episode } from "../../types/episode";

export const e19: Episode<
	| "Drew Carey"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Wayne Brady"
	| "Bob Derkach"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_19",
	airdate: "2011-05-05",
	host: "Drew Carey",
	performers: [
		"Jonathan Mangum",
		"Colin Mochrie",
		"Greg Proops",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	guests: ["Wayne Brady"],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Colin Mochrie", "Drew Carey"],
			scene: "Gynecology and Hair transplants",
			styles: ["High drama", "French", "_The Flintstones_", "Horror"],
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Ryan Stiles", "Greg Proops"],
			moderators: ["Jonathan Mangum"],
			scene: "A writer or transplant coordinator",
		},
		{
			name: "Two-Headed Expert",
			alternateName: "Two-Headed",
			expert: ["Greg Proops", "Drew Carey"],
			interviewer: ["Brad Sherwood", "Colin Mochrie"],
			scene: "In an amusement park",
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["The soap opera", "_Mi Flaming Corazon_"],
			lines: [
				"Kitties",
				"I like boys!",
				"Tell the guy in the blue shirt 'Stop yawning.'",
				"What's up, bitch?",
				"Super Bowl",
				"How's it hanging?",
				"I will hold the raccoon in my teeth.",
				"Bend over, I think you have something on your butt.",
			],
		},
	],
};
