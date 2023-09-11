import { type Episode } from "../../types/episode.js";

export const e18: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Josie Lawrence"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-18",
	airdate: "1997-11-06",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Josie Lawrence", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Josie Lawrence",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Characters from _A Streetcar Named Desire_",
				},
				{
					name: "Colin Mochrie",
					quirk: "Has an acute sense of smell",
				},
				{
					name: "Ryan Stiles",
					quirk: "Horny Frankenstein's monster",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A knight preparing for a joust",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Foreign travel](https://whoselineisitanyway.fandom.com/wiki/Foreign_Travel_Hoedown)",
		},
		{
			name: "Hats",
			topic: "World's worst TV advertisements",
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Impossible",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Greg Proops",
			mission: "Buying a pair of shoes",
		},
		{
			name: "Greatest Hits",
			singers: ["Josie Lawrence"],
			salesmen: ["Ryan Stiles", "Greg Proops"],
			musicians: ["Richard Vranch"],
			album: "_Songs of the Hospital_",
			songs: [
				{
					style: "50s",
					title: "Wow, This Soup Is Cold",
				},
				{
					style: "70s",
					title: "Slice Me, Dice Me, Nicely Nice Me",
				},
				{
					style: "Children's classic",
					title: "I May Be Just an Optometrist, but I Only Have Eyes for You",
				},
			],
		},
	],
};
