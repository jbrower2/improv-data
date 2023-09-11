import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "The Bella Twins"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-02",
	airdate: "2017-06-05",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["The Bella Twins"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a busy restaurant",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "The Bella Twins",
			styles: ["Beastie Boys"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			actorPerformers: ["Ryan Stiles", "Colin Mochrie"],
			soundPerformers: ["The Bella Twins"],
			scene:
				"Two cops patrolling an amusement park when suddenly everyone starts to turn into evil monsters",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Pickup lines in space",
				"Weird ways for Aisha to open the show",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "The Bella Twins"],
			scene:
				"Athletes Ryan and Colin are in the Alps training for the Winter Olympics when there's an avalanche and they have to take shelter in a mountaintop chalet",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[The cowboy](https://whoselineisitanyway.fandom.com/wiki/Cowboy_Hoedown)",
		},
	],
};
