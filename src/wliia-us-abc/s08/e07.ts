import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-07",
	airdate: "2006-03-20",
	productionNumber: "296751-8017",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Fashion Models",
			commentators: ["Denny Siegel"],
			models: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			job: "Construction worker",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film Theater and Television Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Colin approaches his neighbor Ryan to complain about Ryan's vicious pit bull",
			styles: [
				"Gangster movie",
				"Romance",
				"Slasher film",
				"Surfer movie",
				"Science-fiction movie",
				"Spaghetti western",
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "The circus",
		},
		{
			name: "Old Job, New Job",
			scene:
				"Wayne is at the dentist, Denny is the hygienist, and Ryan and Colin are two dentists",
			oldJob: "Ryan and Colin used to be firefighters",
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "At a laundromat",
		},
		{
			name: "Hats",
			alternateName: "Dating Service",
			topic: "World's worst dating service video",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Birth](https://whoselineisitanyway.fandom.com/wiki/Birth_Hoedown_(US_8-07))",
		},
	],
};
