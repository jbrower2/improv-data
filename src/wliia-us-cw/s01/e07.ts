import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Heather Anne Campbell"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Lisa Leslie"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-07",
	airdate: "2013-08-13",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Heather Anne Campbell",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Lisa Leslie"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Ollie Wantacracker",
			},
			coAnchor: {
				name: "Heather Anne Campbell",
				alternateName: "Lucy",
				quirk:
					"Ditzy beautician taking the opportunity to promote her waxing salon",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Ramoo",
				quirk:
					"Appearing on _Girls Gone Wild_, getting increasingly outrageous",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Lumpy Garoo",
				quirk:
					"Moonlighting as a phone sex operator and keeps taking calls during his report",
			},
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Lisa",
			styles: ["Justin Timberlake"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Heather Anne Campbell"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Dental surgery",
		},
		{
			name: "What's in the Bag?",
			alternateName: "What Is in the Bag?",
			performers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			bagDonors: ["Elizabeth", "Susan"],
			scene:
				"Wayne is biking through a forest when he crashes painfully, and then Ryan and Colin are two paramedics who rush to his aide",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Heather", "Lisa"],
			scene:
				"A honeymooning couple making the most of their first class flight, when their plane hits a big storm and is forced to make an emergency landing in the ocean",
		},
	],
};
