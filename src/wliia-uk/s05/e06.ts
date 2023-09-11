import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Josie Lawrence"
	| "Richard Vranch"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_5-06",
	airdate: "1993-04-09",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Ryan Stiles", "Colin Mochrie", "Josie Lawrence"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Learning to catch a bullet between your teeth",
				"The ultimate pop-up book",
				"The four horsemen of the apocalypse",
				"A convention of wrestlers",
				"Two prisoners who may have shared a cell for too long",
				"Dental floss seminar",
				"Dog parties",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: ["Mugging"],
			lines: [
				"I must now return to my own time.",
				"Your cheeks look so cute when you smile.",
				"I've been flying my helicopter naked.",
				"It makes a bigger noise if you hold it the other way around.",
			],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Snails or slugs",
			styles: ["Drunken auntie in a wedding"],
		},
		{
			name: "Superheroes",
			crisis: "Earthquake",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Hamster Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Fidget Man",
				},
				{
					name: "Josie Lawrence",
					superpower: "Woman Who's Shocked by Everything",
				},
				{
					name: "Colin Mochrie",
					superpower: "Rhyming Couplet Kid",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to sit next to on an airplane"],
		},
		{
			name: "Props",
			pairs: [
				["Josie Lawrence", "Colin Mochrie"],
				["Greg Proops", "Ryan Stiles"],
			],
		},
		{
			name: "Scene to Music",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Colin is always borrowing Ryan's clothes",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Greg Proops", "Ryan Stiles", "Josie Lawrence"],
			scene: "Greg has gone to Ryan for advice as to how to get off with women",
			film: "_Test Tube Babies_ (1948)",
		},
		{
			name: "Helping Hands",
			performers: [
				"Greg Proops",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Greg is ordering a pizza and Ryan is cooking the pizza and explaining how pizzas are made",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Showjumper",
				},
				{
					name: "Colin Mochrie",
					quirk: "Mr Universe contestant",
				},
				{
					name: "Ryan Stiles",
					quirk: "Thinks he is a moth",
				},
			],
		},
	],
};
