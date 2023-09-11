import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Niall Ashdown"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-05",
	airdate: "1996-08-09",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Niall Ashdown", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Superheroes",
			crisis: "Shortage of teabags",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Super Spud",
				},
				{
					name: "Ryan Stiles",
					superpower: "Double-Take Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Extinct Animal Boy",
				},
				{
					name: "Niall Ashdown",
					superpower: "Extremely Nervous Compulsive Liar Boy",
				},
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two butchers",
			secretLocation: "In the beef",
		},
		{
			name: "Song Styles",
			singers: ["Niall Ashdown"],
			musicians: ["Richard Vranch"],
			about: "Mark, the bank manager",
			styles: ["Love song"],
		},
		{
			name: "Changing Emotions",
			performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles"],
			props: [
				{
					prop: "Axe",
					emotion: "Angry",
				},
				{
					prop: "Torch",
					emotion: "Touchy feely",
				},
			],
			scene: "In a log cabin",
		},
		{
			name: "Number of Words",
			scene: "A bank robbery",
			performers: [
				{
					name: "Greg Proops",
					quirk: "Bank robber",
					words: 1,
				},
				{
					name: "Niall Ashdown",
					quirk: "Bank teller",
					words: 3,
				},
				{
					name: "Colin Mochrie",
					quirk: "Bank teller",
					words: 5,
				},
				{
					name: "Ryan Stiles",
					quirk: "Bank robber",
					words: 2,
				},
			],
		},
		{
			name: "Hollywood Director",
			alternateName: "The Director",
			director: "Colin Mochrie",
			actors: ["Ryan Stiles", "Greg Proops"],
			scene: "_Star Wars_",
			notes: [
				"Both of you have to be extremely paranoid",
				"Emphasize every other word",
				"Do it like you're constipated",
				"You're constipated strippers who emphasize every other word",
			],
		},
		{
			name: "Sportscasters",
			alternateName: "Sports Commentators",
			commentators: ["Greg Proops", "Niall Ashdown"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two flatmates late for work sharing the bathroom",
		},
		{
			name: "Bartender",
			alternateName: "Barroom Scene",
			bartender: "Niall Ashdown",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Greg Proops",
					quirk: "Celebrating losing his virginity in Spain",
				},
			],
		},
	],
};
