import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-16",
	airdate: "2006-11-10",
	productionNumber: "296751-8007",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Superheroes",
			crisis: "No beer",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Superbum",
				},
				{
					name: "Ryan Stiles",
					superpower: "Rodeo Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Nosy",
				},
				{
					name: "Wayne Brady",
					superpower: "Captain Totally Made of Springs",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A monk escapes from his monastery for a night on the town",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Wayne Brady"],
			],
		},
		{
			name: "Hey, You Down There!",
			narrator: "Greg Proops",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			topic: "Preparing for a nuclear attack",
		},
		{
			name: "Daytime Talk Show",
			host: "Greg Proops",
			guests: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Wayne Brady"],
			topic: "Hey Diddle Diddle, the Cat and the Fiddle",
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "At a high school",
		},
		{
			name: "Hats",
			alternateName: "Dating Service Video",
			topic: "World's worst dating service video",
		},
	],
};
