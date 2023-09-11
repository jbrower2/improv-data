import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-04",
	airdate: "2018-06-18",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "At a speed dating event",
		},
		{
			name: "Forward Rewind",
			scene:
				"Wayne and Jonathan are two macho park rangers in Jurassic Park trying to round up missing dinosaurs, Ryan is a panicking scientist who rides in to warn them of danger and Colin is a rampaging dinosaur",
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit to reduce stress",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				'When saying "I love you" is not appropriate',
				"Strange things to happen while you're taking a bath",
				"Jobs that should never be done in the nude",
				"Competitions no one would enter",
			],
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Jonathan Mangum",
				"Colin Mochrie",
				"Wayne Brady",
			],
			scene: "A school reunion",
			film: "_Beyond Tomorrow_ (1940)",
		},
		{
			name: "Sideways Scene",
			performers: ["Colin Mochrie", "Jonathan Mangum", "Wayne Brady"],
			scene:
				"Wayne and Jonathan are playing volleyball, Colin is going to enter as their angry coach to show them how it's done",
			styles: "Horror, Documentary about birds, _Gravity_",
		},
	],
};
