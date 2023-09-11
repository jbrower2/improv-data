import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-11",
	airdate: "2005-02-21",
	productionNumber: "296744-7011",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "No more shaving cream",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Not Hot but Spicy Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Ridicules People Behind Their Back Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Panic",
				},
				{
					name: "Wayne Brady",
					superpower: "Malfunctioning Robot Doctor",
				},
			],
		},
		{
			name: "Hey, You Down There!",
			narrator: "Greg Proops",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			topic: "Training to be a fireman",
		},
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is a vampire bat who flies into the bedroom of mouthy college girl Wayne, who is showering and getting ready for a date. After Ryan is transformed into Count Dracula, Professor Van Helsing, Greg kicks down the door to confront him",
			notes: [
				"Do it like a cheesy sitcom, Ryan is the vampire pretending he's gay",
				"Do it like you're incredibly near-sighted",
				"Do it like Riverdancers, with hiccups",
			],
		},
		{
			name: "Two-Line Vocabulary",
			performers: ["Colin Mochrie", "Wayne Brady", "Ryan Stiles"],
			scene: "Three soldiers are caught in a foxhole under enemy fire",
			lines: [
				{
					name: "Wayne Brady",
					lines: ["Is that what I think it is?", "I don't think so."],
				},
				{
					name: "Ryan Stiles",
					lines: [
						"Do you wanna piece of this?",
						"You remind me of my mother when you do that.",
					],
				},
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "_Jurassic Park_",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Wayne Brady", "Drew Carey"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Swahili"],
			film: "_I Think the Mountain Moved_",
		},
	],
};
