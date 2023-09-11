import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "George Wendt"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-16",
	airdate: "1997-10-23",
	host: "Clive Anderson",
	performers: ["Greg Proops", "George Wendt", "Colin Mochrie", "Ryan Stiles"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Greg Proops", "Colin Mochrie"],
			scene:
				"Colin has a pet gremlin, called Greg, but he forgot to heed the warning to keep him away from water",
			styles: ["_Braveheart_", "Australian soap opera", "Woody Allen"],
		},
		{
			name: "Old Job, New Job",
			performers: ["Greg Proops", "George Wendt"],
			oldJobPerformers: ["Ryan Stiles"],
			scene:
				"George is taking his wife, who is played by Greg, out to a restaurant, and Ryan is the waiter",
			oldJob: "Ryan used to be a drugs squad officer",
		},
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "George Wendt",
					quirk: "Builder on a construction site",
				},
				{
					name: "Colin Mochrie",
					quirk: "Trying to impress Greg with his seductive accents",
				},
				{
					name: "Ryan Stiles",
					quirk: "Suffers from tremendous mood swings",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Colin Mochrie", "George Wendt"],
			translators: ["Ryan Stiles", "Greg Proops"],
			languages: ["Turkish"],
			film: "_The Return of the Chicken_",
		},
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			scene: "Claims that President Clinton exposed himself to him",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Terrifying Underthesheets",
			},
			coAnchor: {
				name: "Ryan Stiles",
				alternateName: "Rand McNally",
				quirk: "Constantly moaning about his personal problems",
			},
			sports: {
				name: "George Wendt",
				quirk: "Gets bizarrely turned on by sports",
			},
			weather: {
				name: "Colin Mochrie",
				quirk: "Always wanted to be a chorus line choreographer",
			},
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Improbable",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Greg Proops",
			mission: "Take the car to the car wash",
		},
	],
};
