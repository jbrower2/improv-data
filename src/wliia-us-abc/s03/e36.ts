import { type Episode } from "../../types/episode.js";

export const e36: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anna Wanselius"
> = {
	number: 36,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-36",
	airdate: "2001-05-17",
	productionNumber: "296733-344",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Lars Lars Pantsonfars",
			},
			coAnchor: {
				name: "Chip Esten",
				alternateName: "Dude McFarland",
				quirk: "Surfer dude looking for the ultimate ride",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Ubba Dubba",
				quirk: "Being sucked into a black hole (in the camera)",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Stormy Cumulus",
				quirk: "Shipwrecked survivor spotting a possible rescue plane",
			},
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"Noah is told that he must quickly build the ark before the storm hits",
		},
		{
			name: "Song Titles",
			scene: "On a road trip across America",
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Two security guards in a nuclear power plant are alarmed when they see that a suspicious stranger, Colin, has gained entry to a highly-secured area.",
			styles: [
				"Melodrama",
				"Australian soap opera",
				"Shakespeare",
				"Religious channel",
				"Spaghetti western",
			],
		},
		{
			name: "Motown Group",
			singers: ["Wayne Brady", "Chip Esten", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
			song: "Do the Shower",
		},
		{
			name: "Hoedown",
			performers: ["Chip Esten", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Talk shows](https://whoselineisitanyway.fandom.com/wiki/Talk_Shows_Hoedown)",
		},
	],
};
