import { type Episode } from "../../types/episode";

export const e32: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Karen Maruyama"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 32,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-32",
	airdate: "2000-04-20",
	productionNumber: "296718-235",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Karen Maruyama", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Karen Maruyama"],
			scene:
				"Ryan is a WWII pilot saying goodbye to his tearful girlfriend, Karen, as he leaves on a dangerous mission; Colin, his wounded co-pilot, promises to look after her",
			styles: ["John Wayne", "Guerilla theater", "_Pokemon_", "Monster movie"],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Les Miserable",
			},
			coAnchor: {
				name: "Karen Maruyama",
				alternateName: "Francine Lee",
				quirk: "Frisky granny with a crush on Colin",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Winky",
				quirk: "Inept fireman called to an emergency",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Stormy",
				quirk: "Matador in a bullfight",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Bob, a pastor",
			styles: ["A James Bond theme song"],
		},
		{
			name: "Party Quirks",
			host: "Karen Maruyama",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "An episode of _Cops_ in 30 seconds",
				},
				{
					name: "Colin Mochrie",
					quirk: "Thinks Karen is a malfunctioning vending machine",
				},
				{
					name: "Ryan Stiles",
					quirk: "Cat going through all nine lives",
				},
			],
		},
		{
			name: "The Millionaire Show",
			host: "Colin Mochrie",
			contestant: "Ryan Stiles",
			friendOnThePhone: "Wayne Brady",
			audienceMember: "Karen Maruyama",
			theme: "1930s gangsters",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Linda Taylor"],
			about:
				"[The scary wife](https://whoselineisitanyway.fandom.com/wiki/Scary_Wife_Hoedown)",
		},
	],
};
