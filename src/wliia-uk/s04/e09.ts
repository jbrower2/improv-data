import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Clive Anderson"
	| "Ron West"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Richard Vranch"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-09",
	airdate: "1992-03-21",
	host: "Clive Anderson",
	performers: ["Ron West", "Ryan Stiles", "Colin Mochrie", "Greg Proops"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely gifts from cornflakes packets",
				"Strange traffic violations",
				"High noon",
				"Peeing your name in the snow",
				"Two childhood sweethearts meeting after thirty years",
				"Giving up smoking",
				"Two cows at a coffee shop",
				"A meeting of fly paper manufacturers",
			],
		},
		{
			name: "Old Job, New Job",
			alternateName: "New Job, Old Job",
			performers: ["Greg Proops", "Colin Mochrie"],
			oldJobPerformers: ["Ryan Stiles"],
			scene: "Working at a burger bar",
			oldJob: "Ryan used to be in the Marines",
		},
		{
			name: "Questions Only",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["Meeting on the beach"],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Ron West",
					quirk: "He is on a jungle expedition",
				},
				{
					name: "Colin Mochrie",
					quirk: "Thinks he is an octopus",
				},
				{
					name: "Ryan Stiles",
					quirk: "Basketball player",
				},
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["Colin's trying to go through Customs"],
			lines: [
				"Dammit, you're sexy.",
				"Stop tap dancing, you fool.",
				"Where did that kangaroo come from?",
				"Never sit on barbed wire when you're naked.",
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be President"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Ron West"],
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Colin Mochrie",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Ryan is a secretary, and Colin is trying to dictate a letter",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Ron West", "Ryan Stiles", "Greg Proops"],
			scene: "Arguing over who's going to sit in the comfy chair",
		},
		{
			name: "Superheroes",
			crisis: "Acid rain",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Psychic Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Man Who Says Everything Twice Man",
				},
				{
					name: "Ron West",
					superpower: "Man Who Censors Himself",
				},
				{
					name: "Colin Mochrie",
					superpower: "Boneless Boy",
				},
			],
		},
		{
			name: "Hoedown",
			about:
				"[Skiing](https://whoselineisitanyway.fandom.com/wiki/Skiing_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
