import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Karla Souza"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-03",
	airdate: "2016-06-06",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Karla Souza"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Munchkin bully who keeps getting into fights",
				},
				{
					name: "Colin Mochrie",
					quirk: "Blind Italian gondolier serenading people he thinks are sexy",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Farmer who gets bitten by a radioactive chicken to become 'Chicken Man'",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Karla",
			styles: ["A boy band"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Songs from the musical, _Aisha_",
				"Unlikely valentine's card verses",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Karla"],
			scene:
				"Explorers camping in the desert before traveling to a newly discovered pyramid",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Plastic surgeon](https://whoselineisitanyway.fandom.com/wiki/Plastic_Surgeon_Hoedown)",
		},
	],
};
