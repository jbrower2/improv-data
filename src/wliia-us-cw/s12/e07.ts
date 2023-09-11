import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Nyima Funk"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Jack Osbourne"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-07",
	airdate: "2023-05-12",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Nyima Funk", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Jack Osbourne"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about your car, but not your partner",
				"The dating videos of fictional characters",
				"Weird things to read on a medical label",
				"Things you don't want to hear from the person you've just woken up next to",
			],
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Jack",
			styles: ["Salsa"],
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit to help people overcome their phobias",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"~~Circumcision~~ [Pregnancy](https://whoselineisitanyway.fandom.com/wiki/Pregnancy_Irish_Drinking_Song)",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Cruising_",
			songs: [
				{
					style: "Nicki Minaj",
					title: "Time for Shuffleboard",
				},
				{
					style: "Ragtime",
					title: "42 Sickened",
				},
				{
					style: "Belly dance",
					title: "Husband Overboard",
				},
			],
		},
	],
};
