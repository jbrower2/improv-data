import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-20",
	airdate: "2015-10-05",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Butch female coach gathering and training her all-girl wrestling team",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Demanding actor auditioning people to do a passionate love scene with him",
				},
				{
					name: "Ryan Stiles",
					quirk: "Chimp being launched into space",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Mickey", "Melanie"],
			scene:
				"Two Special Forces commandos enjoying a little R&R in Las Vegas when they hear on a newsflash that alien spaceships are attacking the city",
		},
		{
			name: "Film Dub",
			performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
			scene: "One day in the lab",
			film: "_Evil Brain from Outer Space_ (1964)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Weird things for a principal to say at a school assembly",
				"Strange things to happen at a urinal",
				"Excerpts from TV shows that will never get made",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of San Francisco_",
			songs: [
				{
					style: "Lil Wayne and Pavarotti",
					title: "Way Too Many Hills",
				},
				{
					style: "Boogie Woogie",
					title: "Escape from the Rock",
				},
			],
		},
	],
};
