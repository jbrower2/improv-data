import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Mircea Monroe"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-09",
	airdate: "2023-06-02",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Mircea Monroe"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Gary Anthony Williams",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Frisky elderly actress",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Power hungry airport TSA agent giving everyone a thorough search",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Mad scientist looking for mates for his monstrous creation, Colin",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Mircea",
			styles: ["Gospel"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad things to hear your pilot announce",
				'Using the word "boing", demsonstate bad times for Viagra to kick in',
				"Cartoon characters in therapy",
				"If blues singers sang about embarrasing health problems",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Gary Anthony Williams"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Pedicures on gross feet",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Divorce](https://whoselineisitanyway.fandom.com/wiki/Divorce_Irish_Drinking_Song_(US_20-09))",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: ": _Songs of Florida_",
			songs: [
				{
					style: "Jamacian dance hall",
					title: "It's Too Hot, I'm Dying!",
				},
				{
					style: "Korean pop",
					title: "There's A Gator In My Pool",
				},
			],
		},
	],
};
