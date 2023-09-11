import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Ardal O'Hanlon"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-07",
	airdate: "1996-08-23",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Ardal O'Hanlon", "Colin Mochrie", "Ryan Stiles"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Greg Proops", "Ardal O'Hanlon"],
			scene:
				"Greg is the fireman confronting the owner of a skyscraper in a sort of _Towering Inferno_ situation",
			styles: ["_ER_", "Slash", "stalk", "Science fiction"],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Ryan is teaching Colin",
				"who is just ten minutes away from his debut as a ballet dancer",
			],
			lines: [
				"I was brought up by monkeys.",
				"Now you know my plan, I'm going to have to kill you.",
				"Hey!  Smell this!",
				"Has this been inserted correctly?",
			],
		},
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Ardal O'Hanlon",
					quirk: "Human thesaurus",
				},
				{
					name: "Colin Mochrie",
					quirk: "Desperate for attention",
				},
				{
					name: "Ryan Stiles",
					quirk: "Giving birth",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Outtake from a TV medical program"],
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Impossible",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Greg Proops",
			mission: "Buying a loaf of bread",
		},
		{
			name: "Number of Words",
			scene: "In a casino",
			performers: [
				{
					name: "Greg Proops",
					quirk: "Croupier",
					words: 4,
				},
				{
					name: "Ryan Stiles",
					quirk: "Gambler",
					words: 1,
				},
				{
					name: "Ardal O'Hanlon",
					quirk: "Gambler loser",
					words: 2,
				},
				{
					name: "Colin Mochrie",
					quirk: "Glamorous floozy",
					words: 3,
				},
			],
		},
		{
			name: "Superheroes",
			crisis: "Moose invasion",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Captain Tact",
				},
				{
					name: "Ryan Stiles",
					superpower: "Karate Lizard Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "See Through Your Ass, Hear Through Your Elbow Guy",
				},
				{
					name: "Ardal O'Hanlon",
					superpower: "Agitated Duck Boy",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Ardal O'Hanlon",
					quirk: "TV weatherman",
				},
				{
					name: "Colin Mochrie",
					quirk: "Gradually getting younger",
				},
				{
					name: "Ryan Stiles",
					quirk: "Dog going in and out of water",
				},
			],
		},
	],
};
