import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Greg Proops"
	| "Jim Sweeney"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-01",
	airdate: "1991-01-18",
	host: "Clive Anderson",
	performers: ["Josie Lawrence", "Greg Proops", "Jim Sweeney", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_How I Killed My Fairy Godmother_",
			performers: [
				{
					name: "Josie Lawrence",
					author: "_Michelin Guide to Famous Building & Landmarks in London_",
				},
				{
					name: "Greg Proops",
					author: "Jack Kerouac",
				},
				{
					name: "Jim Sweeney",
					author: "J.R.R. Tolkien",
				},
				{
					name: "Tony Slattery",
					author: "_My Little Pony_",
				},
			],
		},
		{
			name: "Alphabet",
			performers: ["Jim Sweeney", "Greg Proops"],
			scene: "A stick-up",
			startingLetter: "A",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "A rubber duck",
			styles: ["Calypso"],
		},
		{
			name: "Props",
			pairs: [
				["Josie Lawrence", "Greg Proops"],
				["Tony Slattery", "Jim Sweeney"],
			],
		},
		{
			name: "Gospel",
			musician: "Richard Vranch",
			about: "Cake decorating",
		},
		{
			name: "Helping Hands",
			performers: [
				{
					body: "Jim Sweeney",
					hands: "Tony Slattery",
				},
				{
					body: "Josie Lawrence",
					hands: "Greg Proops",
				},
			],
			scene: "Someone complaining about the decorations",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Jim Sweeney",
					quirk: "Gets everything wrong",
				},
				{
					name: "Josie Lawrence",
					quirk: "Turning into a kangaroo",
				},
				{
					name: "Greg Proops",
					quirk: "Compulsive talker",
				},
			],
		},
		{
			name: "Expert Translation",
			expert: "Josie Lawrence",
			translator: "Jim Sweeney",
			language: "Albanian",
			topic: "Sheep",
		},
		{
			name: "Psychiatrist",
			psychiatrist: "Josie Lawrence",
			musician: "Richard Vranch",
			performers: [
				{
					name: "Greg Proops",
					quirk: "Thinks he's an Eskimo",
				},
				{
					name: "Jim Sweeney",
					quirk: "Scared of hats",
				},
				{
					name: "Tony Slattery",
					quirk: "In love with Teenage Mutant Ninja Turtles",
				},
			],
		},
	],
};
