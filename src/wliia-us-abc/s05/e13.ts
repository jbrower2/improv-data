import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-13",
	airdate: "2003-01-17",
	productionNumber: "296734-408",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Questions Only",
			scenes: [
				"The police have been called in to investigate a robbery on a nudist beach",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Kathy"],
			scene:
				"Two guys who are enjoying different activities at a ski resort before going back to their chalet to relax",
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Kathy Greenwood"],
			scene: "A woman's car breaks down on the freeway",
		},
		{
			name: "Party Quirks",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Group of rock stars recording a benefit song to raise money for Colin's hair transplant",
				},
				{
					name: "Colin Mochrie",
					quirk:
						'Batman villain "The Tickler" terrorizing everyone in the studio',
				},
				{
					name: "Ryan Stiles",
					quirk:
						"A class of kindergarten kids posing for their individual yearbook photos",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Kathy Greenwood",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"A newlywed couple who wake up the morning after their wedding night to have breakfast together",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Magicians](https://whoselineisitanyway.fandom.com/wiki/Magicians_Hoedown)",
		},
	],
};
