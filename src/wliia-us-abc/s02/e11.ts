import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-11",
	airdate: "1999-11-11",
	productionNumber: "296718-222",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Temperamental rock star in his hotel room",
				},
				{
					name: "Colin Mochrie",
					quirk: "Gets turned on by danger",
				},
				{
					name: "Ryan Stiles",
					quirk: "Ravenous boa constrictor",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			scene:
				'Ryan and Greg are two rival bikers challenging each other to a game of "Chicken", racing towards the edge of a cliff, Colin is the anxious girlfriend who doesn\'t want them to do it',
			styles: [
				"Japanese monster movie",
				"Soap opera",
				"_I Love Lucy_",
				"Marx Brothers",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Wayne Brady"],
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "A chicken with attitude",
				},
				{
					name: "Colin Mochrie",
					quirk: "Auditioning for every part in a slasher film",
				},
				{
					name: "Ryan Stiles",
					quirk: "Excited by ugliness and searching for the perfect specimen",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "A toaster",
			styles: ["An entire gospel choir"],
		},
		{
			name: "World's Worst",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Television program"],
		},
	],
};
