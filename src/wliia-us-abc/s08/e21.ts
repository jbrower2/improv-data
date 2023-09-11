import { type Episode } from "../../types/episode.js";

export const e21: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 21,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-21",
	airdate: "2007-12-15",
	productionNumber: "296751-8021",
	host: "Drew Carey",
	performers: ["Greg Proops", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	games: [
		{
			name: "Superheroes",
			crisis: "No more shoelaces",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Spineless Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Seductive Shower Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "The Salmonella Kid",
				},
				{
					name: "Denny Siegel",
					superpower: "Bitchy Gossip Woman",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "An American G.I. escaping from a German prisoner-of-war camp",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film Theater and Television Styles",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene:
				"Greg is a jockey who walks into the stables to find Ryan, another jockey, injecting something into Greg's horse",
			styles: [
				"_Love Story_",
				"_Exorcist_",
				"Musical",
				"Puppet show",
				"First-aid training film",
			],
		},
		{
			name: "Let's Make a Date",
			host: "Denny Siegel",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Calling a horse race",
				},
				{
					name: "Colin Mochrie",
					quirk: "Passenger on a plane when the window blows open",
				},
				{
					name: "Ryan Stiles",
					quirk: "Desperate criminal on the run, cornered in the studio",
				},
			],
		},
		{
			name: "Number of Words",
			scene:
				"Ryan is a G.I. stationed in Hawaii and Denny is his girlfriend, Greg is a beautiful, pregnant Hawaiian girl and Colin is Greg's angry mother",
			performers: [
				{
					name: "Colin Mochrie",
					words: 4,
				},
				{
					name: "Greg Proops",
					words: 2,
				},
				{
					name: "Denny Siegel",
					words: 3,
				},
				{
					name: "Ryan Stiles",
					words: 6,
				},
			],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Kyle", "Christina"],
			scene:
				"Ryan is a store detective who spots Colin putting something in his coat pocket",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Drew Carey", "Denny Siegel"],
			translators: ["Ryan Stiles", "Greg Proops"],
			languages: ["Italian"],
			film: "_The Endless Day_",
		},
	],
};
