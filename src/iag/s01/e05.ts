import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Drew Carey"
	| "Heather Anne Campbell"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_05",
	airdate: "2011-04-15",
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
			name: "Greatest Hits",
			singers: ["Jeff Davis", "Chip Esten"],
			salesmen: ["Ryan Stiles", "Heather Anne Campbell"],
			musicians: ["Bob Derkach"],
			album: "_Songs of Bomb Disarming and Disposal_",
			songs: [
				{
					style: "Disco",
					title: "Short Fuse",
				},
			],
		},
		{
			name: "First Date",
			mainCouple: ["Heather Anne Campbell", "Jeff Davis"],
			extraPerformers: ["Jonathan Mangum", "Ryan Stiles", "Chip Esten"],
			coupleFromTheAudience: ["Patrice", "John"],
		},
		{
			name: "Forward Rewind",
			alternateName: "Forward and Reverse",
			performers: ["Jeff Davis", "Ryan Stiles"],
			scene: "Rear-ending car accident",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Drew Carey", "Heather Anne Campbell"],
			moderators: ["Jeff Davis"],
			scene: "Acrobatics",
		},
	],
};
