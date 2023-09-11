import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Tommy Little"
	| "Susie Youssef"
	| "Steen Raskopoulos"
	| "Bridie Connell"
	| "Tom Walker"
	| "Fourplay with Judy"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-10",
	airdate: "2017-02-12",
	host: "Tommy Little",
	performers: [
		"Susie Youssef",
		"Steen Raskopoulos",
		"Bridie Connell",
		"Tom Walker",
	],
	musicians: [
		{
			name: "Fourplay with Judy",
			alternateName: "Poonani Buffet",
		},
	],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you don't want to hear from your Airbnb host",
				"Things you can say about your phone but not your partner",
				"What not to yell in a restaurant",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Tom Walker", "Susie Youssef"],
			scenes: [
				"At a train station",
				"a disappointed mother",
				"Susie",
				"collects her wayward child",
				"Tom",
				"who's been expelled from an exclusive boarding school",
			],
			lines: [
				"I'm drunk right now.",
				"I can move things with my mind.",
				"Clean up in aisle me.",
				"Did you want mustard on that?",
			],
		},
		{
			name: "Hats",
			alternateName: "Dating Service",
		},
		{
			name: "Weird Newscasters",
			alternateName: "Weird Newsreaders",
			anchor: {
				name: "Susie Youssef",
				alternateName: "Annette Ball",
			},
			coAnchor: {
				name: "Bridie Connell",
				alternateName: "Ginger Beer",
				quirk: "A child who thinks Susie is Santa Claus",
			},
			sports: {
				name: "Steen Raskopoulos",
				alternateName: "Johnnie Walker Andcokeandiceinaglass",
				quirk: "Scalping tickets to _Whose Line Is It Anyway?_",
			},
			weather: {
				name: "Tom Walker",
				alternateName: "Frank",
				quirk: "The evolution of life on Earth",
			},
		},
		{
			name: "Bartender",
			bartender: "Bridie Connell",
			musicians: ["Fourplay with Judy"],
			performers: [
				{
					name: "Susie Youssef",
					quirk: "Angry about milk",
				},
				{
					name: "Steen Raskopoulos",
					quirk: "Frightened about his first gray hair",
				},
				{
					name: "Tom Walker",
					quirk: "In love with potatoes",
				},
			],
		},
		{
			name: "Quick Change",
			performers: ["Steen Raskopoulos", "Bridie Connell", "Tom Walker"],
			moderators: ["Tommy Little"],
			scene:
				"Tom and Steen are two bears returning to their cottage after a long day, when they awaken Goldilocks, Bridie, sleeping in one of their beds (they wish)",
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "Selling drugs at school",
		},
	],
};
