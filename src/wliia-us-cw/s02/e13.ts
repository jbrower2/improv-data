import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Misha Collins"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-13",
	airdate: "2014-06-16",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Misha Collins"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Heavy metal headbanger trying to start increasingly crazy mosh pits",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"A series of chickens from around the world getting their heads cut off",
				},
				{
					name: "Ryan Stiles",
					quirk: "Heroic helicopter pilot who only rescues sexy people",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Misha",
			styles: ["Russian folk"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Excerpts from unlikely game shows",
				"Odd things to read on a message in a bottle",
				"Unlikely things to read in a school textbook",
				"Things you can say about your vacation, but not about your girlfriend",
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Cheese](https://whoselineisitanyway.fandom.com/wiki/Cheese_Hoedown)",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Misha"],
			scene:
				"Two guys riding their motorcycles to Vegas for a crazy activity-filled weekend",
		},
	],
};
