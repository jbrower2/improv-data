import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-09",
	airdate: "2001-10-10",
	productionNumber: "296722-318",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is an incompetent waiter who spills something on temperamental supermodel Wayne, Chip is her angry husband who comes in to confront Ryan",
			notes: [
				"Do it like _The Exorcist_, (Wayne) you're possessed, (Ryan) you're the mother, and (Chip) you're a priest",
				"Do it like you're doing it on an out-of-control moving walkway",
				"Do it like rodeo riders",
				"Do it like a porn movie filled with exercise instructors",
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Shauna, an exotic animal trainer and handler",
			styles: ["Speed metal"],
		},
		{
			name: "Song Titles",
			scene: "At a police station on a busy Saturday night",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Times when you'd like to say \"Let's see that again in slow motion\"",
				"Bad times to ask her for sex",
				"Bad names for perfume",
				"What your dogs think and do when you leave them alone in the house",
				"Unusual cases for the FBI",
				"World's worst catchphrases",
				"If people broke into song in real life",
				"Difficult questions for mommy to answer",
			],
		},
		{
			name: "Hoedown",
			performers: ["Chip Esten", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Drunk mother](https://whoselineisitanyway.fandom.com/wiki/Drunk_Mother_Hoedown)",
		},
	],
};
