import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-08",
	airdate: "2020-06-22",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Japanese teen pop sensation looking for people to help launch the next big dance craze",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Drowning man using other people's body parts to keep himself afloat",
				},
				{
					name: "Ryan Stiles",
					quirk: "Acting out the fantasies of Colin Mochrie",
				},
			],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene: "Tensions rise on the beach",
			film: "_She Gods of Shark Reef_ (1958)",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[I Went on a Date and Had No Money](https://whoselineisitanyway.fandom.com/wiki/I_Went_on_a_Date_and_Had_No_Money_Irish_Drinking_Song)",
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Ryan is Adam; Colin is Eve",
			secret: "Ventriloquist's dummy",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about a city, that you can't say about your partner",
				"Things you don't want to hear from the person you're sharing a bed with",
				"Unlikely lines from country and western songs",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Jonathan Mangum", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Big Box Supermarket_",
			songs: [
				{
					style: "Scat",
					title: "Twelve Items or Less",
				},
				{
					style: "Irish rock",
					title: "Don't Cut the Line, Bitch",
				},
			],
		},
	],
};
