import { type Episode } from "../../types/episode";

export const e36: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 36,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-36",
	airdate: "2000-05-04",
	productionNumber: "296718-219",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Superheroes",
			crisis: "No more Rogaine",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Captain Hair",
				},
				{
					name: "Ryan Stiles",
					superpower: "Totally Insane Old Man",
				},
				{
					name: "Chip Esten",
					superpower: "The Chippendale Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "Captain Frat Boy",
				},
			],
		},
		{
			name: "Let's Make a Date",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Possessed girl from _The Exorcist_",
				},
				{
					name: "Colin Mochrie",
					quirk: "Cantankerous snowman who is melting",
				},
				{
					name: "Ryan Stiles",
					quirk: "Destructive toddler learning to walk and talk",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "A funnel",
			styles: ["1940s tap dance number"],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Colin is Davy Crockett",
				"Ryan is Jim Bowie",
				"they're about to make their last stand at the Alamo",
				"Colin is losing his nerve",
			],
			lines: [
				"Lay a wet one on me, big guy.",
				"Why are you dressed like a French maid?",
				"It's time for your sponge bath.",
				"Shut up and touch the monkey!",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad game show concepts",
				"Things you never want to hear your grandmother say",
				"Pick up lines in the fruit and vegetable aisle",
				"Personal ads that won't get many responses",
				"People you'll never see on the cover of _Playboy_",
				"Modern additions to the ten commandments",
				"If dogs told jokes",
				"Favorite pranks of ER doctors",
			],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Wayne Brady"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
