import { type Episode } from "../../types/episode";

export const e19: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Griffin"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "David Hasselhoff"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-19",
	airdate: "2003-06-27",
	productionNumber: "296736-610",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Kathy Griffin", "Colin Mochrie", "Ryan Stiles"],
	guests: ["David Hasselhoff"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Kathy Griffin"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Rats and mice",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "David Hasselhoff",
			styles: ["Gospel"],
		},
		{
			name: "Two-Line Vocabulary",
			scene:
				"Colin is Indiana Jones and Ryan and Kathy are his two sidekicks. They're looking for the Holy Grail in an ancient temple full of dangerous traps",
			lines: [
				{
					name: "Ryan Stiles",
					lines: ["What does that do?", "I want out."],
				},
				{
					name: "Kathy Griffin",
					lines: ["I love this!", "Are you kidding?"],
				},
			],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			dubber: "Wayne Brady",
			dubbed: "David Hasselhoff",
			scene:
				"Colin is a beautiful woman who's gone swimming and is in trouble, hunky lifeguard David Hasselhoff comes to her rescue, just then, Colin's boyfriend Ryan arrives, determined to show that he is the hunkiest and fittest lifeguard on the beach",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "David Hasselhoff", "Ryan Stiles"],
			musicians: "Laura and Linda",
			to: "Venus from the audience",
			song: "I Can't Live Without Your Mother",
		},
	],
};
