import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Mark Cohen"
	| "Greg Proops"
	| "John Sessions"
	| "Richard Vranch"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-11",
	airdate: "1991-03-29",
	host: "Clive Anderson",
	performers: ["Mike McShane", "Mark Cohen", "Greg Proops", "John Sessions"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_She's Gotta Have More Macaroni & Cheese_",
			performers: [
				{
					name: "Mike McShane",
					author: "The Journals of Lewis and Clark",
				},
				{
					name: "Mark Cohen",
					author: "Mario Puzo",
				},
				{
					name: "Greg Proops",
					author: "Millie the White House dog",
				},
				{
					name: "John Sessions",
					author: "Ernest Hemingway",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			groups: [
				{
					performers: ["John Sessions", "Mark Cohen"],
					scene: "Borrowing something from a neighbour",
					styles: [
						"Film noir",
						"Surrealist",
						"Commedia dell'arte",
						"Pornography",
					],
				},
				{
					performers: ["Mike McShane", "Greg Proops"],
					scene:
						"A teenage son telling his father that he's smashed in the car",
					styles: ["David Lynch", "Ibsen", "Hitchcock"],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Idea for a TV program"],
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Greg Proops"],
				["Mike McShane", "Mark Cohen"],
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "Underwear",
			styles: ["Disco"],
		},
		{
			name: "Party Quirks",
			host: "Mark Cohen",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Auctioneer",
				},
				{
					name: "Mike McShane",
					quirk: "U.S. football coach",
				},
				{
					name: "John Sessions",
					quirk: "Bad mime artist",
				},
			],
		},
		{
			name: "Gospel",
			musician: "Richard Vranch",
			about: "Lawyers",
		},
	],
};
