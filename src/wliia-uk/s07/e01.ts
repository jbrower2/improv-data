import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Niall Ashdown"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-01",
	airdate: "1995-07-28",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Colin Mochrie", "Niall Ashdown", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["In a men's changing room after a game"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Greg Proops", "Niall Ashdown"],
			scene:
				"Greg is a tourist and he's hired a local person, and they're trying to search for the Loch Ness Monster",
			styles: ["_Poseidon Adventure_", "James Bond", "Indiana Jones"],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: ["A lawyer meeting his client just before a big case"],
			lines: [
				"Only your chicken impression can save us now.",
				"Go on, give it a squeeze.",
				"Grease me up, I'm getting in.",
			],
		},
		{
			name: "Song Styles",
			singers: ["Niall Ashdown"],
			musicians: ["Richard Vranch"],
			about: "Drew, whose friend says she'd like to pretend to be a stripper",
			styles: ["Love song"],
		},
		{
			name: "Superheroes",
			crisis: "Run out of cornflakes",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Obsessive-Compulsive Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Wiggle Worm",
				},
				{
					name: "Colin Mochrie",
					superpower: "Mispronunciation Boy",
				},
				{
					name: "Niall Ashdown",
					superpower: "Fascinated-by-Belly-Buttons Boy",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Niall Ashdown"],
				["Colin Mochrie", "Greg Proops"],
			],
		},
		{
			name: "Animals",
			performers: ["Colin Mochrie", "Greg Proops", "Ryan Stiles"],
			scene: "Soap opera",
			animals: "Hamsters",
		},
		{
			name: "Backwards Scene",
			performers: ["Ryan Stiles", "Niall Ashdown"],
			scene: "One of them is being kicked out of the Army",
		},
		{
			name: "Film Dub",
			performers: ["Greg Proops", "Ryan Stiles"],
			scene: "The problems of sharing a flat",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Niall Ashdown",
					quirk: "Does as many accents as possible",
				},
				{
					name: "Colin Mochrie",
					quirk: "A salesman who has reached breaking point",
				},
				{
					name: "Ryan Stiles",
					quirk: "White water rafting",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Halloween](https://whoselineisitanyway.fandom.com/wiki/Halloween_Hoedown_(UK))",
		},
	],
};
