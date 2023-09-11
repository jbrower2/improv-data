import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-08",
	airdate: "2022-12-09",
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
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Crazed shark hunter Ryan and his panicking skipper Gary are in stormy seas hunting a great white shark.  When they get into trouble, Wayne, the coast guard, enters on a speedboat.",
			notes: [
				"Do it like Jerry Springer guests",
				"Do it like a Bollywood movie",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Sara", "Eric"],
			scene:
				"Ryan and Colin are two crime fighters using a time machine to pursue a dangerous criminal through different eras.",
		},
		{
			name: "Newsflash",
			anchormen: ["Gary Anthony Williams", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Frogs",
		},
		{
			name: "Scenes from a Hat",
			alternateName: "Scenes From A Hat",
			scenes: [
				"Unlikely questions on a health insurance form",
				"Things you can say about your local bar, but not about your partner",
				"Ill-advised things to do with your package",
				"Coupons you'll never wanna use",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Spa_",
			songs: [
				{
					style: "Jamacian Dance Hall",
					title: "Your're Soaking In It",
				},
				{
					style: "Bluegrass Rap",
					title: "No Towels 'Cause There Was No Tip",
				},
			],
		},
	],
};
