import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-09",
	airdate: "1998-12-16",
	productionNumber: "296717-108",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Superheroes",
			crisis: "Frizzy hair",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Fruit and Vegetable Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Ice Hockey Kid",
				},
				{
					name: "Colin Mochrie",
					superpower: "Irate Film Director Boy",
				},
				{
					name: "Wayne Brady",
					superpower: "Playful Licking Puppy Boy",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Jennifer, a student of English literature",
			styles: ["Luther Vandross"],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Wolverine St. Jack John",
			},
			coAnchor: {
				name: "Greg Proops",
				alternateName: "Twice Nightly",
				quirk: "A gremlin",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "An (overly) emotional preacher at a funeral",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Jigs McKenzie",
				quirk: "Being attacked by (increasingly) ferocious animals",
			},
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Lifeguard_",
			songs: [
				{
					style: "Gospel",
					title: "Shark! Shark! I Think I See a Shark!",
				},
				{
					style: "Salsa",
					title: "Son of a Beach",
				},
				{
					style: "Lounge hit",
					title: "Blublublublub",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Aging rapidly",
				},
				{
					name: "Colin Mochrie",
					quirk: "The many roles of Charlton Heston",
				},
				{
					name: "Ryan Stiles",
					quirk: "Eagle struggling to pick up heavy things",
				},
			],
		},
		{
			name: "Questions Only",
			performers: ["Drew Carey", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["A tourist hotel is about to turn into the towering inferno"],
		},
	],
};
