import { type Episode } from "../../types/episode.js";

export const e19: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-19",
	airdate: "2000-01-13",
	productionNumber: "296718-210",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Alarmingly Huge",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Way too open about his personal problems",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Overzealous woman at a church revival meeting",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Aggressive barfly being repeatedly ejected from a bar",
			},
		},
		{
			name: "Questionable Impressions",
			scene: "At a bus stop",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Disconcerting tattoos to find on your girlfriend",
				"Unlikely cowboy songs",
				"The worst thing to find in your parachute pack",
				"Things you shouldn't do after heavy drinking",
				"Questions you'd like to ask a Miss America contestant",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"From _Braveheart_",
				"the night before the crucial battle with the English",
				"William Wallace",
				"who's Colin",
				"his fellow warrior",
				"Ryan",
				"realize that they're vastly outnumbered",
			],
			lines: [
				"I did not have sexual relations with that woman.",
				"I am woman, hear me roar.",
				"My friends all call me Mr. Tuggy.",
				"I see Paris, I see France, I see someone's underpants.",
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: "Laura and Linda",
			musical: "_Trashman_",
			song: "They Threw It Away",
		},
		{
			name: "Hoedown",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Puberty](https://whoselineisitanyway.fandom.com/wiki/Puberty_Hoedown_(US_2-19))",
		},
	],
};
