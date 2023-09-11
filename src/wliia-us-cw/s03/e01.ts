import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Cedric the Entertainer"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-01",
	airdate: "2015-04-17",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Cedric the Entertainer"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Carlo Cuzthetiresflat",
			},
			coAnchor: {
				name: "Gary Anthony Williams",
				alternateName: "Trixie",
				quirk: "Colin's lapdancer for the evening",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Chauncey",
				quirk:
					"Manic Irish dancer trying to start the world's biggest Riverdance in the studio",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Thaddeus P. Carbuckle",
				quirk: "19th century showman looking for new acts for his freak show",
			},
		},
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			performers: [
				"Wayne Brady",
				"Cedric the Entertainer",
				"Ryan Stiles",
				"Colin Mochrie",
			],
			scene: "It's a high school reunion and passions erupt",
		},
		{
			name: "World's Worst",
			scenes: ["Things to see or hear in a superhero movie"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Cedric"],
			scene:
				"Astronauts whose spaceship flies into an asteroid storm, they're forced to make a crash landing on a hostile alien planet",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Dallas_",
			songs: [
				{
					style: "_The Lion King_",
					title: "Long Boots and Short Horses",
				},
				{
					style: "Cajun",
					title: "Everything's Bigger",
				},
			],
		},
	],
};
