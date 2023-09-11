import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Rory Bremner"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-02",
	airdate: "1996-07-19",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Rory Bremner", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Rory Bremner",
					quirk: "Prince Charles",
				},
				{
					name: "Colin Mochrie",
					quirk: "In love with his own body",
				},
				{
					name: "Ryan Stiles",
					quirk: "Former business partner ripped off by Greg",
				},
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Noah and his wife",
			secretLocation: "A hole in the bottom of the boat",
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Rory Bremner", "Greg Proops"],
			scene: "One day on the street",
			film: "_The Saint_",
		},
		{
			name: "Sportscasters",
			alternateName: "Sports Commentators",
			commentators: ["Greg Proops", "Rory Bremner"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Showing off to a girl at the nightclub",
		},
		{
			name: "World's Worst",
			scenes: ["Outtakes from a news or documentary television program"],
		},
		{
			name: "Home Shopping",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			items: ["A book with no pages", "A banana skin", "An unflushable toilet"],
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Rory Bremner"],
			lastBody: "Greg Proops",
			scene:
				"Two cowboys rounding up the herd, joined by a girl arriving with bad news",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Rory Bremner",
					quirk: "Clive Anderson",
				},
				{
					name: "Colin Mochrie",
					quirk: "Constantly dying and being reincarnated",
				},
				{
					name: "Ryan Stiles",
					quirk: "Gazelle being stalked by a lion",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Being a Tory politician](https://whoselineisitanyway.fandom.com/wiki/Being_a_Tory_Politician_Hoedown)",
		},
	],
};
