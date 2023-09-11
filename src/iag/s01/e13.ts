import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Drew Carey"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Wayne Brady"
	| "Bob Derkach"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_13",
	airdate: "2011-04-27",
	host: "Drew Carey",
	performers: [
		"Jonathan Mangum",
		"Colin Mochrie",
		"Greg Proops",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	guests: ["Wayne Brady"],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Forward Rewind",
			alternateName: "Forward Reverse",
			performers: ["Wayne Brady", "Jonathan Mangum"],
			scene: "Ancient history",
		},
		{
			name: "Every Other Line",
			alternateName: "Playbook",
			performers: ["Colin Mochrie", "Drew Carey"],
			scene: "Dungeons and Dragons",
			play: "_Six Degrees of Separation_",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Jonathan Mangum", "Brad Sherwood"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Bob Derkach"],
			album: "_The Greatest Hits of the Unemployed_",
			songs: [
				{
					style: "Motown",
					title: "I'm Growin' Weed",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Greg Proops"],
			audienceMembers: ["Tanya", "Karla"],
			scene: "Racecar driver",
		},
	],
};
