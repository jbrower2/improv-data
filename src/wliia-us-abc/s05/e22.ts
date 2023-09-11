import { type Episode } from "../../types/episode.js";

export const e22: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 22,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-22",
	airdate: "2003-07-11",
	productionNumber: "296736-607",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan's a criminal breaking rocks in the prison yard, Chip's the tough prison warden who decides to frisk him because he suspects he's carrying a concealed weapon, and then Wayne flies in on a helicopter to help Ryan escape",
			notes: [
				"Do it like a Bob Fosse musical",
				"Do it like a cheesy 70s porn",
				"Do it like _Stomp_",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Sally", "Cheryl"],
			scene:
				"Ryan is an explorer and Colin is a beautiful, feisty research scientist, they're on an expedition down a mighty river in Africa to capture King Kong",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Chip Esten"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen:
				"People being covered with snakes, grubs, and insects, and others eating worms and other bugs",
		},
		{
			name: "Bartender",
			bartender: "Chip Esten",
			musicians: ["Laura Hall", "Linda Taylor"],
			performers: [
				{
					name: "Colin Mochrie",
					quirk: "Angry about the size of his feet",
				},
				{
					name: "Ryan Stiles",
					quirk: "His zipper doesn't work",
				},
				{
					name: "Wayne Brady",
					quirk: "In love with Chip",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Chip Esten", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Superman](https://whoselineisitanyway.fandom.com/wiki/Superman_Hoedown)",
		},
	],
};
