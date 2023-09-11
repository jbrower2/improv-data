import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Grace Byers"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-15",
	airdate: "2017-09-28",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Grace Byers"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene:
				"Indiana Jones, Ryan, and his sidekick Brad are breaking into a booby-trapped Aztec temple, when suddenly they're attacked by an evil spirit, played by Wayne",
			notes: ["Do it like frat boys", "Do it like it's _Les Miz_"],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Grace",
			styles: ["Cabaret"],
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Colin Mochrie"],
			phoneReaders: ["Brad Sherwood", "Wayne Brady"],
			phoneDonors: ["Brandon", "Linea"],
			scene:
				"Ruthless criminal Colin is about to go on a bank raid with his henchmen",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If people behaved like football players in their everyday lives",
				"Inappropriate things to have written on a cake",
				"Gifts guaranteed to ruin a romantic date",
				"World's worst Tinder introductions",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Grace Byers",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a hunky young bartender who's opened his own place in Cancun and Grace is a flirtatious tourist",
		},
	],
};
