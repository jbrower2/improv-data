import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-07",
	airdate: "2021-02-26",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"On the African plain, hunter Ryan is teaching flirty heiress Heather how to shoot, suddenly her husband Wayne rushes in, being chased by a herd of stampeding animals",
			notes: [
				"Do it like you're all possessed.",
				"Do it like you're guests on a trashy daytime talk show.",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you wouldn't hear on a TV makeover show",
				"The dating videos of nursery rhyme characters",
				"Unlikely subjects to be taught in school",
				"If bad news were delivered in song",
			],
		},
		{
			name: "Party Quirks",
			host: "Heather Anne Campbell",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"A series of 'Star Wars' characters desperate to use the bathroom",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Foot masseur who gets aroused then horrified by people's feet",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Clips from new DVD 'The World's Most Painful Sports Bloopers'",
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Car Mechanic_",
			songs: [
				{
					style: "Ed Sheeran",
					title: "GPS, Internet, Everything but a Damn Engine",
				},
				{
					style: "Colin's Aunt Sheila",
					title: "This Damn Seat Ain't Adjustable",
				},
			],
		},
	],
};
