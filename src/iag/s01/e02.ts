import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Charlie Sheen"
	| "Bob Derkach"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_02",
	airdate: "2011-04-12",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Colin Mochrie",
		"Greg Proops",
		"Ryan Stiles",
	],
	guests: ["Charlie Sheen"],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Greatest Hits",
			singers: ["Jeff Davis", "Chip Esten"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Bob Derkach"],
			album: "_Songs of the Farmer_",
			songs: [
				{
					style: "Jazz ballad",
					title: "Dust Storm",
				},
			],
		},
		{
			name: "Show-Stopping Number",
			alternateName: "Bob's Call",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Nurses",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Colin Mochrie", "Drew Carey"],
			moderators: ["Jeff Davis"],
			styles: [
				"Mexican",
				"Italian",
				"Horror",
				"Kabuki",
				"_Cats_",
				"_Black Swan_",
				"Very dramatic Shakespeare",
				"Seven-",
				"Three-word sentences",
				"Three-word sentences from _Cats_",
			],
		},
		{
			name: "Story",
			leader: "Ryan Stiles",
			storytellers: [
				"Colin Mochrie",
				"Drew Carey",
				"Greg Proops",
				"Chip Esten",
				"Jeff Davis",
				"Charlie Sheen",
			],
			title: "_Dumbaloney_",
		},
	],
};
