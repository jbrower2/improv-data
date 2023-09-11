import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-10",
	airdate: "2021-04-16",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a luxury hotel",
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Christine", "Sydney"],
			scene:
				"Two zookeepers have to transport a truckload of dangerous animals across the country when they run into trouble",
		},
		{
			name: "Film Dub",
			performers: [
				"Wayne Brady",
				"Gary Anthony Williams",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scene: "One day on the beach",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about a building that you can't say about your partner",
				"Weird things for a cop to say while they're frisking you",
				"What Aisha does when she's in her dressing room",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Lifeguard_",
			songs: [
				{
					style: "_Les Mis_",
					title: "My Trunks Are Riding Up",
				},
				{
					style: "Line dancing",
					title: "Riptide",
				},
				{
					style: "Ska",
					title: "Great White",
				},
			],
		},
	],
};
