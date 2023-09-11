import { type Episode } from "../../types/episode.js";

export const e14: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Whoopi Goldberg"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-14",
	airdate: "2001-11-14",
	productionNumber: "296735-507",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Whoopi Goldberg",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"The evil whip-wielding Judge Frollo, Ryan, has cornered gypsy girl Esmerelda, Whoopi, in the bell tower and is forcing her to do a sensual dance for him, suddenly, hideously ugly Quasimodo, Wayne, swings in to save her",
			notes: [
				"Do it like TV evangelists",
				"Do it like high school cheerleaders",
				"Do it like you're New York insult comics",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Whoopi",
			styles: ["Tina Turner"],
		},
		{
			name: "Dubbing",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			dubber: "Wayne Brady",
			dubbed: "Whoopi Goldberg",
			scene:
				"Colin is a brilliant French designer in love with his temperamental star, supermodel Whoopi, as she is practicing her catwalk routine backstage, her jealous photographer boyfriend Ryan bursts in",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad things to do as you walk down the aisle at your wedding",
				"If classic movies had nude scenes",
				"If cartoon characters had adult conversations",
				"What you don't want to see tattooed on your date",
				"Inappropriate times to use baby talk",
				"Inappropriate topics of conversation when meeting the Queen of England",
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Drew Carey", "Whoopi Goldberg"],
			translators: ["Ryan Stiles", "Colin Mochrie"],
			languages: ["Chinese"],
			film: "_Soba Noodle for You_",
		},
	],
};
