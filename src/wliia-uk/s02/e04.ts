import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Josie Lawrence"
	| "Paul Rider"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-04",
	airdate: "1989-12-08",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Josie Lawrence", "Paul Rider", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title:
				"_The Temptation of Going to the Supermarket and Meeting an Old Lady_",
			performers: [
				{
					name: "Greg Proops",
					author: "Cherokee oral tradition",
				},
				{
					name: "Josie Lawrence",
					author: "D. H. Lawrence",
				},
				{
					name: "Paul Rider",
					author: "Ted Hughes",
				},
				{
					name: "Mike McShane",
					author: "A Hollywood gossip columnist",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Paul Rider", "Josie Lawrence"],
					scene: "A couple on their wedding anniversary",
					styles: ["Spaghetti western", "Silent movie", "Children's programme"],
				},
				{
					performers: ["Greg Proops", "Mike McShane"],
					scene: "Two surgeons operating away",
					styles: ["Soap opera", "Horror"],
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "A food processor",
			styles: ["Rock & Roll (Mike)", "Spanish flamenco (Josie)"],
		},
		{
			name: "World's Worst",
			scenes: ["Thing to say at a wedding"],
		},
		{
			name: "Props",
			pairs: [
				["Josie Lawrence", "Greg Proops"],
				["Mike McShane", "Paul Rider"],
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Paul Rider",
					quirk: "Male model",
				},
				{
					name: "Josie Lawrence",
					quirk: "Over enthusiastic",
				},
				{
					name: "Mike McShane",
					quirk: "Writes commercials",
				},
			],
		},
		{
			name: "American Musical",
			musician: "Richard Vranch",
			about: "Having a curry, Smoking, and Becoming Prime Minister",
		},
	],
};
