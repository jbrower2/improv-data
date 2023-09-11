import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-13",
	airdate: "2020-07-27",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			alternateName: "Dating App",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "French skunk looking for the perfect kiss",
				},
				{
					name: "Colin Mochrie",
					quirk: "Obnoxious barnacle who only attaches himself to idiots",
				},
				{
					name: "Ryan Stiles",
					quirk: "Hillbilly turned on by the weirdest things",
				},
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about:
				"Shelby, who died tragically in an auto repair shop-related accident",
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie"],
			phoneDonors: ["Antoinette", "Grayson"],
			scene:
				"Prison warden Colin has gathered his guards Wayne and Greg to help him tackle a riot",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely opening lines of a sermon",
				"If strippers used their moves for everyday tasks",
				"Bad things to do or say in the armed forces",
				"Bad people to be marooned on a desert island with",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Greg Proops", "Colin Mochrie"],
			singers: ["Wayne Brady", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Motel_",
			songs: [
				{
					style: "Lounge act Slim and Sloppy",
					title: "No Mint on the Pillow",
				},
				{
					style: "Calypso",
					title: "Little Bar of Soap",
				},
			],
		},
	],
};
