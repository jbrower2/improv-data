import { type Episode } from "../../types/episode";

export const e24: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 24,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-24",
	airdate: "2001-03-22",
	productionNumber: "296722-310",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Superheroes",
			crisis: "We're out of milk",
			performers: [
				{
					name: "Brad Sherwood",
					superpower: "Slappy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Panicky Ski-Jump Puppet Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "The Bitter Drunk Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "Captain Flubber",
				},
			],
		},
		{
			name: "Two-Line Vocabulary",
			performers: ["Brad Sherwood", "Ryan Stiles", "Colin Mochrie"],
			lines: [
				{
					name: "Brad Sherwood",
					lines: ["What do you mean by that?", "I want one of those."],
				},
				{
					name: "Ryan Stiles",
					lines: ["That's my job.", "Someone needs a hug."],
				},
			],
			scene:
				"Colin is a female boss who has invited Brad and Ryan over for a barbecue to discuss the fact that only one of them is getting promoted",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"What the cast of _Cats_ is doing now that the show has finally closed",
				"Grafitti in the _Whose Line_ bathroom",
				"The wrong thing to say to a heartbroken friend",
				"What _Whose Line_ cast members wish for when they blow out their birthday candles",
				"In-laws that make you question your engagement",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Travelling Salesman_",
			songs: [
				{
					style: "Barenaked Ladies",
					title: "It Sucks Up Pennies",
				},
				{
					style: "60s protest",
					title: "Knock, Knock, Hello, Slam",
				},
				{
					style: "Bloodhound Gang",
					title: "I Forgot My Pitch",
				},
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			to: "Becca",
			song: "The First Time We Kissed",
		},
	],
};
