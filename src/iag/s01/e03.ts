import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_03",
	airdate: "2011-04-13",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Kathy Kinney",
		"Colin Mochrie",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Jeff Davis", "Ryan Stiles"],
			audienceMembers: ["Lynnette", "Cooper"],
			scene: "Garbage men",
		},
		{
			name: "Greatest Hits",
			alternateName: "Hits Compilation",
			singers: ["Chip Esten", "Brad Sherwood", "Jeff Davis"],
			salesmen: ["Drew Carey", "Ryan Stiles"],
			musicians: ["Bob Derkach"],
			album: "_Songs of the Big Game Hunter_",
			songs: [
				{
					style: "Irish ballad",
					title: "I Killed It in Kenya",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Drew Carey", "Kathy Kinney"],
			scene: "Social worker",
			styles: [
				"Vaudeville",
				"_Kung Fu_",
				"_Kung Fu_ vaudeville",
				"_Zumanity_",
				'Every word starts with "T"',
				"_Dirty Dancing_",
			],
		},
		{
			name: "Every Other Line",
			alternateName: "Playbook",
			performers: ["Brad Sherwood", "Ryan Stiles"],
			play: "_Six Degrees of Separation_",
			scene: "Brad's coming home and he lost his job",
		},
	],
};
