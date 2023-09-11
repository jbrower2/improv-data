import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-12",
	airdate: "2019-09-23",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt in the Navy",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Regina", "Kelly"],
			scene:
				"In the Wild West, Sheriff Ryan and Deputy Colin hear that a gang of vicious outlaws are attacking a train",
		},
		{
			name: "Party Quirks",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Various animals smashing into glass doors",
				},
				{
					name: "Colin Mochrie",
					quirk: "Devolving from grown man to primordial slime and back again",
				},
				{
					name: "Ryan Stiles",
					quirk: "A series of celebrities auditioning to be pole dancers",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad names for breakfast cereals",
				"Pickup lines in the hospital",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Holidays_",
			songs: [
				{
					style: "Bob Dylan Bob Dylan",
					title: "Budget Halloween",
				},
				{
					style: "Early jazz",
					title: "Trick-or-treat",
				},
			],
		},
	],
};
