import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Clive Anderson"
	| "Ryan Stiles"
	| "Josie Lawrence"
	| "Mike McShane"
	| "Greg Proops"
	| "Colin Mochrie"
	| "George McGrath"
	| "Christopher Smith"
	| "Jim Meskimen"
	| "Richard Vranch"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-17",
	airdate: "1991-05-10",
	host: "Clive Anderson",
	performers: [
		"Ryan Stiles",
		"Josie Lawrence",
		"Mike McShane",
		"Greg Proops",
		"Colin Mochrie",
		"George McGrath",
		"Christopher Smith",
		"Jim Meskimen",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Three Men and a Duck_",
			performers: [
				{
					name: "Greg Proops",
					author: "Zane Grey",
				},
				{
					name: "George McGrath",
					author: "The various authors of the Bible",
				},
				{
					name: "Ryan Stiles",
					author: "Tony Esposito, who writes for _National Geographic_",
				},
				{
					name: "Mike McShane",
					author: "An American greeting card",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Refrigerators",
			styles: ["Country"],
		},
		{
			name: "News Report",
			anchormen: ["Greg Proops"],
			expert: "Mike McShane",
			reporter: "George McGrath",
			variousCharacters: "Ryan Stiles",
			topic: "Jack & Jill",
		},
		{
			name: "Helping Hands",
			performers: [
				"Mike McShane",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Mike is going to see fortune teller Ryan",
		},
		{
			name: "World's Worst",
			performers: [
				"Josie Lawrence",
				"Ryan Stiles",
				"Christopher Smith",
				"Jim Meskimen",
			],
			scenes: ["Person to sit next to in a cinema"],
		},
		{
			name: "Psychiatrist",
			psychiatrist: "Mike McShane",
			musician: "Richard Vranch",
			performers: [
				{
					name: "Ryan Stiles",
					quirk: "Obsessed with men",
				},
			],
		},
		{
			name: "Expert",
			interviewer: "Greg Proops",
			expert: "Ryan Stiles",
			topic: "Aerobics",
		},
		{
			name: "Party Quirks",
			host: "Ryan Stiles",
			guests: [
				{
					name: "George McGrath",
					quirk: "Sleepwalker",
				},
				{
					name: "Mike McShane",
					quirk: "Cannibal",
				},
				{
					name: "Greg Proops",
					quirk: "Newspaper vendor",
				},
			],
		},
		{
			name: "Psychiatrist",
			psychiatrist: "Josie Lawrence",
			musician: "Richard Vranch",
			performers: [
				{
					name: "Jim Meskimen",
					quirk: "Obsessed with James Brown",
				},
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["George McGrath", "Ryan Stiles"],
			scene: "Two people arguing over the greatest song of all time",
		},
		{
			name: "Props",
			pairs: [
				["Josie Lawrence", "Christopher Smith"],
				["Ryan Stiles", "Jim Meskimen"],
			],
		},
		{
			name: "Rap",
			performers: [
				"Mike McShane",
				"Ryan Stiles",
				"George McGrath",
				"Greg Proops",
			],
			musician: "Richard Vranch",
			about: "Stamp collecting",
		},
	],
};
