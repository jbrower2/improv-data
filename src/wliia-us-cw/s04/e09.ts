import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tamera Mowry"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-09",
	airdate: "2016-07-26",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Tamera Mowry"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"The world's worst battle cry",
				"Unlikely things to hear in court",
				"Pickup lines on the golf course",
				"Clips from the world's weirdest game shows",
			],
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Tamera",
			styles: ["Motown"],
		},
		{
			name: "Themed Restaurant",
			diners: ["Wayne Brady", "Tamera Mowry"],
			waiters: ["Colin Mochrie", "Ryan Stiles", "Greg Proops"],
			scene: "A young couple having a romantic meal",
			theme: "The films of Tom Hanks",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Greg Proops"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Tamera Mowry",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a stressed-out business executive firing his assistant, Tamera, who also happens to be his girlfriend",
		},
	],
};
