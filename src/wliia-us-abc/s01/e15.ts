import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-15",
	airdate: "1999-02-10",
	productionNumber: "296717-118",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: "Colin Mochrie",
			coAnchor: {
				name: "Greg Proops",
				quirk: "A crazed James Bond villain",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Crash Ripley",
				quirk: "Spots his girlfriend with another man in the audience",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "A psycho with a chainsaw",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Carly, a fashion designer",
			styles: ["Cab Calloway"],
		},
		{
			name: "Hats",
			alternateName: "Dating Service",
			topic: "World's worst dating service video",
		},
		{
			name: "Sportscasters",
			commentators: ["Greg Proops", "Wayne Brady"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two plumbers making a house call",
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Greg Proops", "Colin Mochrie"],
			scene:
				"Two suitors asking the father for his daughter's hand in marriage",
			film: "_High Conquest_ (1947)",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Mechanic_",
			songs: [
				{
					style: "70s funk",
					title: "Check Under the Hood",
				},
				{
					style: "Snoop Doggy Dogg",
					title: "I'm Gonna Lube You Whether You Like It or Not",
				},
				{
					style: "Stevie Wonder",
					title: "Supertransmission",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Surgery](https://whoselineisitanyway.fandom.com/wiki/Surgery_Hoedown)",
		},
	],
};
