import { type Episode } from "../../types/episode";

export const e16: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-16",
	airdate: "2001-01-25",
	productionNumber: "296722-322",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Colin is a witch hunter and he's about to burn Ryan at the stake for being a witch, Ryan being a young woman, Wayne is her boyfriend, a farmer who has come to plead for her life",
			styles: [
				"_Real World_",
				"_Masterpiece Theatre_",
				"Latin American game show",
				"_Barney_",
				"_Crocodile Hunter_",
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "A dishwasher",
			styles: ["Jitterbug"],
		},
		{
			name: "Song Titles",
			scene: "At an emergency room",
		},
		{
			name: "Party Quirks",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Scene-stealing extra showing he can play the other parts better",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Has brought a date covered in chocolate body paint and he's licking it off",
				},
				{
					name: "Ryan Stiles",
					quirk: "Baseball player trying to steal his way home",
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Cowboy_",
			songs: [
				{
					style: "Early vaudeville",
					title: "Hock Ptui Ding",
				},
				{
					style: "Simon & Garfunkel",
					title: "The Sounds of Stirrups",
				},
				{
					style: "Run DMC",
					title: "You Yellow-Bellied Lily-Livered Oooh [Mother]",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Chip Esten", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Plastic surgery](https://whoselineisitanyway.fandom.com/wiki/Plastic_Surgery_Hoedown_(US_3-16))",
		},
	],
};
