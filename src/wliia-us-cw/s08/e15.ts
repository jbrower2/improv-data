import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-15",
	airdate: "2020-08-31",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a wedding",
		},
		{
			name: "Film Dub",
			performers: [
				"Wayne Brady",
				"Brad Sherwood",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scene: "One day at a spa",
			film: "_She Demons_ (1958)",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Julia", "Katie"],
			scene:
				"Two cops patrolling a zoo when they get orders to head downtown to combat a zombie invasion",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"World's worst Tinder introductions",
				"Unlikely names for candy bars",
				"Bad times to get caught fooling around with someone",
				"If Vegas magicians did regular jobs",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Backpacking_",
			songs: [
				{
					style: "Rap",
					title: "Killer on the Loose",
				},
				{
					style: "Aria from the opera _Bolemoho_",
					title: "Scraping Bark off a Tree",
				},
			],
		},
	],
};
