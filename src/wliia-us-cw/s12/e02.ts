import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Gary Anthony Williams"
	| "Jonathan Mangum"
	| "Brad Sherwood"
	| "Marisol Nichols"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-02",
	airdate: "2023-04-07",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Colin Mochrie",
		"Ryan Stiles",
		"Gary Anthony Williams",
		"Jonathan Mangum",
		"Brad Sherwood",
	],
	guests: ["Marisol Nichols"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "A series of reptiles going through weird mating rituals",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Increasingly desperate Cookie Monster who thinks cookies are hidden in peoples clothes",
				},
				{
					name: "Ryan Stiles",
					quirk: "Nudist cowboy going through a busy day on the range",
				},
			],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Marisol Nichols",
			scene:
				'Legendary flamenco dancer "El Ryan-o" is getting his protégée Marisol to perform some new moves, when suddenly sexy dancer Wayne appears to put them both to shame',
		},
		{
			name: "Piranha Tank",
			judges: ["Wayne Brady", "Gary Anthony Williams"],
			inventors: ["Colin Mochrie", "Ryan Stiles"],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Gary Anthony Williams", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Mandy, who died tragically in a garden store accident",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad times to take a call",
				"The world's worst dance crazes",
				"Pick-up lines in the army",
				"If famous movies and TV shows had only starred munchkins",
				"If all movies were directed by Quentin Tarantino",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Jonathan Mangum", "Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of New Years Eve_",
			songs: [
				{
					style: "Rockabilly",
					title: "My Ball Dropped in Times Square",
				},
			],
		},
	],
};
