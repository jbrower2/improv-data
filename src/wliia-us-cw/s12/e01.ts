import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Jeff Davis"
	| "Keegan-Michael Key"
	| "Candice Accola"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-01",
	airdate: "2023-03-31",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Colin Mochrie",
		"Ryan Stiles",
		"Jeff Davis",
		"Keegan-Michael Key",
	],
	guests: ["Candice Accola"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Forward Rewind",
			scene:
				"Wayne is a young woman who is posessed by demons or the devil.  Colin is his frantic mother and Ryan is a priest who tries to exorcise the evil spirit out of Wayne.  Keegan is the evil demon that materializes",
		},
		{
			name: "Hats",
			topic: "World's worst dating video",
		},
		{
			name: "Daytime Talk Show",
			host: "Colin Mochrie",
			guests: ["Ryan Stiles", "Keegan-Michael Key"],
			audienceMembers: ["Wayne Brady"],
			topic: "_Star Wars_",
		},
		{
			name: "Filler Clip",
			notes:
				"Unaired [Greatest Hits](http://whoselineisitanyway.fandom.com/wiki/Greatest%20Hits) banter between Colin and Ryan",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad things to say during a slowdance",
				"Innapropriate times to take a selfie",
				"Strange things to see on a home improvement show",
				"Jobs you should never give old people",
			],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Candice Accola",
			scene:
				"A deleted scene from The Vampire Diaries.  Vampire Ryan is trying to suppress his bloodlust on a date with Candice.  Wayne is Ryan's evil vampire brother who comes in to attack her",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of San Francisco_",
			songs: [
				{
					style: "Dixie Chicks turning into Dixie Chickens",
					title: "You Broke My Heart on The Golden Gate",
				},
			],
		},
	],
};
