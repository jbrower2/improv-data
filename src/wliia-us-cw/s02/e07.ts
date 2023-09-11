import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Nolan Gould"
	| "Laura Hall"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-07",
	airdate: "2014-04-25",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Greg Proops"],
	guests: ["Nolan Gould"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Unfeasibly Large",
			},
			coAnchor: {
				name: "Jeff Davis",
				quirk:
					"Drunk college kid shouting his drive-thru order into Greg the intercom",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Head of a big hillbilly family, gathering his clan for a photo",
			},
			weather: {
				name: "Colin Mochrie",
				quirk: "Highlight reel of all the great horror movie characters",
			},
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Greg Proops"],
			audienceMembers: ["Whitney", "Britney"],
			scene:
				"Cavalry officer Colin and his bugler Greg are defending a fort from an Apache raid and they decide to move their womenfolk and children to safety",
		},
		{
			name: "Living Scenery",
			actors: ["Greg Proops", "Colin Mochrie"],
			props: ["Wayne", "Nolan"],
			scene:
				"A honeymooning couple using different modes of transportation to travel across America stopping to see the various sites",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about: "[Food](https://whoselineisitanyway.fandom.com/wiki/Food_Hoedown)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely cosmetics commercials",
				"Unappetizing flavors of potato chips",
				"Unlikely things for your proctologist to do or say",
			],
		},
	],
};
