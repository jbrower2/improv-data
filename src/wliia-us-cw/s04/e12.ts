import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Lyndie Greenwood"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-12",
	airdate: "2016-08-02",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Lyndie Greenwood"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and his pregnant wife Brad are hunting in the Appalachians, as Brad goes into labor, Wayne, a hillbilly doctor, rushes in to help",
			notes: [
				"Make it a little more action-y, a little more science fiction, like a, yes, a big sci-fi movie",
				"Do it like you're horny as Hell",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Lyndie Greenwood",
			styles: ["Cabaret"],
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Brad Sherwood",
				"Colin Mochrie",
				"Wayne Brady",
			],
			scene: "Asking for directions",
			film: "_The Undead_ (1957)",
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Lyndie Greenwood",
			scene:
				"Ryan is a demanding martial arts instructor going through some moves with his star pupil Lyndie when all of a sudden, arrogant black belt Wayne comes thumping in to take her on",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Lyndie"],
			scene:
				"Two Marines going through a day of intensive training before retiring to their barracks",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely things to see on a how-to video",
				"Bad ways to impress your date",
			],
		},
	],
};
