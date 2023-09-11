import { type Episode } from "../../types/episode";

export const e22: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Brian Shaw"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 22,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-22",
	airdate: "2014-11-07",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Brian Shaw"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Booth Imaghotht",
			},
			coAnchor: {
				name: "Heather Anne Campbell",
				alternateName: "Montana Feisty",
				quirk:
					"Melodramatic soap actress filming her big love scene with Colin",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Shingles Nightly",
				quirk:
					"College student who brings all of his drunk friends to a party at Aisha's",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Musty Odor",
				quirk: "An entire horror movie in 30 seconds",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Brian",
			styles: ["_Lion King_"],
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Heather Anne Campbell",
				"Colin Mochrie",
				"Wayne Brady",
			],
			scene: "Tensions arise in a hotel room",
			film: "_Beast from Haunted Cave_ (1959)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad things to say when meeting your partner's parents for the first time",
				"Things you can say about a drink, but not about your partner",
				"Inappropriate ways to fire someone",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Heather", "Brian"],
			scene:
				"Two convicts on a railroad chain gang in Louisiana who escape and hide out in the dangerous bayou",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Sarah, who died tragically in a fishing accident",
		},
	],
};
