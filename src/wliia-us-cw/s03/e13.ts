import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Gina Rodriguez"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-13",
	airdate: "2015-08-03",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Gina Rodriguez"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Brock Andahardplace",
			},
			coAnchor: {
				name: "Jeff Davis",
				alternateName: "Yvette LaFlunque",
				quirk: "Colin's sexy French maid",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "GI Joe action figure rescuing Barbie from danger",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Stormy Skies",
				quirk: "A dramatic boxing movie in 30 seconds",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Gina",
			styles: ["Beastie Boys"],
		},
		{
			name: "Themed Restaurant",
			diners: ["Jeff Davis", "Gina Rodriguez"],
			waiters: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			scene: "A young couple having a romantic meal in a lovely restaurant",
			theme: "Firefighters",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Times when a touchdown celebration isn't appropriate",
				"Unfortunate times to get food poisoning",
				"Things you can say about your breakfast, that you can't say about your partner",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Gina Rodriguez",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Ryan and Gina have come to a luxury hotel for an affair",
		},
	],
};
