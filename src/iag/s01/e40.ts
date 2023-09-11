import { type Episode } from "../../types/episode.js";

export const e40: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 40,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_40",
	airdate: "2011-06-03",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Kathy Kinney",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Greatest Hits",
			singers: ["Jeff Davis", "Chip Esten"],
			salesmen: ["Ryan Stiles", "Greg Proops"],
			musicians: ["Bob Derkach"],
			album: "_The Greatest Hits of the Doctor_",
			songs: [
				{
					style: "Boy band",
					title: "HMO",
				},
			],
		},
		{
			name: "First Date",
			mainCouple: ["Kathy Kinney", "Drew Carey"],
			extraPerformers: ["Jeff Davis", "Greg Proops", "Ryan Stiles"],
			coupleFromTheAudience: ["Taryn", "Michael"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Chip Esten", "Ryan Stiles"],
			audienceMembers: ["Mason", "Greg"],
			scene: "Skydiving",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Greg Proops", "Ryan Stiles"],
			moderators: ["Jeff Davis"],
			scene: "A nice restaurant",
		},
	],
};
