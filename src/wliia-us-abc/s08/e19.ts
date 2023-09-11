import { type Episode } from "../../types/episode";

export const e19: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-19",
	airdate: "2007-12-14",
	productionNumber: "296751-8018",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Questions Only",
			scenes: ["At a high school reunion"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Television Styles",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene:
				"Ryan is a volcano expert and he's talking to the skeptical mayor, Greg, on the lip of a dormant volcano after it's beginning to show signs of life",
			styles: [
				"Kung-fu movie",
				"Horror movie",
				"Kabuki",
				"Infomercial",
				"Striptease",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Sarah, a teacher",
			styles: ["James Brown"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Wayne Brady"],
			],
		},
		{
			name: "Quiz Show",
			alternateName: "Game Show",
			host: "Greg Proops",
			title: "_Who's Your Daddy?_",
		},
		{
			name: "Hats",
			topic: "World's worst dating agency video",
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "At the laundromat",
		},
	],
};
