import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Hawk"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-01",
	airdate: "2017-05-29",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Tony Hawk"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Scott Togetthatrashcheckedout",
			},
			coAnchor: {
				name: "Heather Anne Campbell",
				alternateName: "Mary Jane",
				quirk:
					"High school girl trying to pretend she's not drunk in front of her dad, Colin",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "A group of Minions carrying out a kidnapping",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Jerry",
				quirk: "Trigger-happy hillbilly who thinks the cameras are trespassers",
			},
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Tony",
			styles: ["Skate punk"],
		},
		{
			name: "Themed Restaurant",
			diners: ["Heather Anne Campbell", "Tony Hawk"],
			waiters: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			scene: "A young couple having a romantic dinner",
			theme: "Science-fiction movies",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Terrible names for dogs",
				"Magicians on a date",
				"Inappropriate times to take your clothes off",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Tony Hawk",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Party animal Ryan is throwing an extravagant New Year's Eve party with his friend Tony",
		},
	],
};
