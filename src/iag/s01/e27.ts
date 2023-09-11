import { type Episode } from "../../types/episode.js";

export const e27: Episode<
	| "Drew Carey"
	| "Heather Anne Campbell"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 27,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_27",
	airdate: "2011-05-17",
	host: "Drew Carey",
	performers: [
		"Heather Anne Campbell",
		"Jeff Davis",
		"Chip Esten",
		"Jonathan Mangum",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Show-Stopping Number",
			alternateName: "Bob's Call",
			performers: ["Jeff Davis", "Ryan Stiles"],
			scene: "Shoe collecting",
		},
		{
			name: "Forward Rewind",
			alternateName: "Forward and Reverse",
			performers: ["Drew Carey", "Jonathan Mangum"],
			moderators: ["Jeff Davis"],
			scene: "Janitorial services",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Ryan Stiles", "Heather Anne Campbell"],
			scene: "On the farm",
			styles: [
				"Film noir",
				"_Star Wars_ science fiction",
				"Romantic literature",
				"Horror",
				"French",
				"_Star Wars_ French",
				"Hip hop",
				"Three-",
				"Seven-word sentences",
				"Hip hop three-",
				"seven-word sentences",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Chip Esten", "Jeff Davis"],
			salesmen: ["Ryan Stiles", "Jonathan Mangum"],
			musicians: ["Bob Derkach"],
			album: "_Songs of the Stockbroker_",
			songs: [
				{
					style: "Memphis soul",
					title: "Bailout",
				},
			],
		},
	],
};
