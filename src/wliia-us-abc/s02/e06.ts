import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-06",
	airdate: "1999-10-14",
	productionNumber: "296718-203",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Denny Siegel",
				alternateName: "Mimi Fatdeposits",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Desperate for attention",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Karate black belt fending off attackers",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Lifeguard who spots a woman drowning",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Jim, an Army recruiter",
			styles: ["Tina Turner"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Naked photos you wouldn't want to see on the internet",
				"The number one sitcom in Germany",
				"What the Grim Reaper does to relax",
				"Least checked-out library books",
				"Inappropriate show-and-tell items",
				"Items you wouldn't expect to see for sale on the home shopping channel",
				"Things you'll never hear in a boxing ring",
				"Unlikely first lines of love songs",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Denny Siegel"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "_The Beast from 20,000 Fathoms_ (1953)",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: "Laura and Linda",
			musical: "_The Lochness Monster_",
			song: "Bubbles",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Gambling](https://whoselineisitanyway.fandom.com/wiki/Gambling_Hoedown)",
		},
	],
};
