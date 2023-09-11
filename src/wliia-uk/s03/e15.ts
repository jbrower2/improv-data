import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "George McGrath"
	| "Ryan Stiles"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-15",
	airdate: "1991-04-26",
	host: "Clive Anderson",
	performers: ["Greg Proops", "George McGrath", "Ryan Stiles", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Story",
			alternateName: "Storyteller",
			leader: "George McGrath",
			title: "_My Favourite Toy_",
			moral: "Never play with electricity",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Ryan Stiles", "George McGrath"],
			scene: "A window cleaner eavesdropping on a corporate boss",
			styles: ["Sam Peckinpah", "Cartoon", "Musical comedy"],
		},
		{
			name: "Props",
			pairs: [
				["George McGrath", "Mike McShane"],
				["Ryan Stiles", "Greg Proops"],
			],
		},
		{
			name: "Alphabet",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene: "Showing somebody around the zoo",
			startingLetter: "Q",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Scuba diving](https://whoselineisitanyway.fandom.com/wiki/Scuba_Diving_Hoedown_(Episode_3-15))",
		},
		{
			name: "Audition",
			director: "Ryan Stiles",
			musician: "Richard Vranch",
			title: "_The West Side of Oklahoma_",
		},
		{
			name: "Helping Hands",
			performers: [
				"Mike McShane",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Ryan is a policeman who's pulled in Mike for speeding",
		},
		{
			name: "Party Quirks",
			host: "Ryan Stiles",
			guests: [
				{
					name: "George McGrath",
					quirk: "Everything shocks him",
				},
				{
					name: "Greg Proops",
					quirk: "School bus driver",
				},
				{
					name: "Mike McShane",
					quirk: "Square dance caller",
				},
			],
		},
		{
			name: "American Musical",
			alternateName: "Musical",
			musician: "Richard Vranch",
			about:
				"Skydiving, Australia, New York, Working in television, and Having your car broken into",
		},
	],
};
