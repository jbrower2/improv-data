import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kat Graham"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-01",
	airdate: "2014-03-21",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Kat Graham"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"What not to say to a police officer who has just pulled you over",
				"Things you don't want to hear your veterinarian say",
				"Things you can say about your house, but not your partner",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kat",
			styles: ["A Broadway musical"],
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit to help men pick up girls",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Auditioning for all the roles in an action movie",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Pest exterminator convinced bugs are hiding in people's clothing",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Deep south sheriff who falls in love with everyone he arrests",
				},
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Kat"],
			scene:
				"James Bond, Ryan, is seducing Bond girl Colin in a health spa, Bond gets a call telling him he must go infiltrate a supervillain's lair",
		},
	],
};
