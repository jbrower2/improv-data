import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Aisha Tyler"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Jaime Camil"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-04",
	airdate: "2015-05-08",
	host: "Aisha Tyler",
	performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady", "Jeff Davis"],
	guests: ["Jaime Camil"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is an Italian pizza chef trying to seduce his beautiful female coworker Jeff, and suddenly Ryan's heavily-pregnant and very jealous wife Wayne rushes in",
			notes: [
				"Do it like you're in a science-fiction movie, try not to offend too many people",
				"Do it like you're _Jerry Springer_ guests",
				"Do it like _Les Miserables_",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Jaime",
			styles: ["Mariachi"],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Jaime Camil",
			scene:
				"Teen sensation Ryan is auditioning Latin American heartthrob Jaime to join his boy band when Jaime's rival, Wayne, comes in to show that he is the one that should get the gig",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Jaime"],
			scene:
				"Two paramedics at the hospital get a call to travel across the city to deal with an accident at the zoo",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kelly who died terribly in an India-related accident",
		},
	],
};
