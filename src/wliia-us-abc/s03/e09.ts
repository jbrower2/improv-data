import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Robin Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-09",
	airdate: "2000-11-16",
	productionNumber: "296722-313",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Robin Williams", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Robin are two Italian chefs making pizzas when they notice unusually large rodents in the kitchen, Wayne enters later as the exterminator they've called to the scene",
			notes: [
				"Do it like hillbillies",
				"Do it like a Riverdance",
				"What I need is you filled with lust",
			],
		},
		{
			name: "Duet",
			singers: ["Robin Williams", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Jeremy, an air traffic controller",
			styles: ["Gospel"],
		},
		{
			name: "Party Quirks",
			host: "Colin Mochrie",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Sitcom starring Richard Simmons, Charo, and Mr. T as roommates",
				},
				{
					name: "Robin Williams",
					quirk:
						"Horrified member of the fashion police rounding up citizens for crimes against fashion",
				},
				{
					name: "Ryan Stiles",
					quirk: "Thinks people's butts are Magic 8-Balls",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely superheroes",
				"World's worst subject for an interpretive dance",
				"If entertainers worked funerals",
				"Famous Hollywood roles as played by Carol Channing",
				"Things you don't expect to hear when you put your ear to a seashell",
				"Bad choices to make when your genie grants you three wishes",
				"Inappropriate anecdotes on a celebrity talk show",
				"What Robin Williams is thinking right now",
			],
		},
		{
			name: "Props",
			pairs: [
				["Drew Carey", "Ryan Stiles"],
				["Wayne Brady", "Robin Williams"],
			],
		},
	],
};
