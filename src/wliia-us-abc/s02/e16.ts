import { type Episode } from "../../types/episode";

export const e16: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-16",
	airdate: "1999-12-09",
	productionNumber: "296718-224",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Change of Cast",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			scene: "Three prisoners breaking out of Alcatraz",
			casts: [
				"Professional wrestlers",
				"_Baywatch_ lifeguards",
				"Catalog models",
				"Weightless astronauts",
				"New York cops",
				"Game show hosts",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Miley, a secretary at a talent agency",
			styles: ["Ray Charles"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Wayne Brady"],
			],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Totally Upforit",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Bitter co-anchor verbalizing his inner thoughts",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Getting arrested",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Sumo wrestler",
			},
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Sebastian", "Sherry"],
			scene:
				"Two surfers who are fighting over a girl and they have challenged each other to ride the big wave",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Shoplifting](https://whoselineisitanyway.fandom.com/wiki/Shoplifting_Hoedown)",
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Ryan Stiles", "Colin Mochrie", "Drew Carey"],
			scene:
				"Ryan, Drew, and Colin are at the Kentucky Derby and have bet all their money on a race that's about to start",
			startingLetter: "Q",
		},
	],
};
