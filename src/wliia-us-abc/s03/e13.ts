import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-13",
	airdate: "2000-11-30",
	productionNumber: "296733-342",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Jack Nicholson from _The Shining_",
				},
				{
					name: "Colin Mochrie",
					quirk: "World's most annoying moviegoer",
				},
				{
					name: "Ryan Stiles",
					quirk: "President Colin's bodyguard on assassination alert",
				},
			],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Greg Proops", "Colin Mochrie"],
			scene: "A marriage in trouble",
			film: "_The Brain that Wouldn't Die_ (1962)",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan is a speeding motorist and he's pulled over by Wayne, a motorcycle cop, who discovers Colin tied up in the back",
			styles: [
				"Mexican soap opera",
				"Gladiator movie",
				"Porno",
				"Animal Planet",
				"_Star Trek_",
			],
		},
		{
			name: "Themed Restaurant",
			diners: ["Colin Mochrie", "Wayne Brady"],
			waiters: ["Greg Proops", "Ryan Stiles"],
			scene: "Two businessmen having a power lunch",
			theme: "An emergency room",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Zookeeper_",
			songs: [
				{
					style: "60s protest",
					title: "[_elephant trumpeting sound_]",
				},
				{
					style: "1953 polka",
					title: "Beers and Sloths",
				},
				{
					style: "Diana Ross",
					title: "Please Don't Feed",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Drew Carey", "Ryan Stiles"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
	],
};
