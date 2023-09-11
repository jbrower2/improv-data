import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-07",
	airdate: "2022-12-03",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Brad are two frat bros on spring break who steal a powerful motorboat.  Wayne is an all-action cop who chases them on a jetski.",
			notes: [
				"Do the scene backwards",
				"Fall in love with everyone you see",
				'Do it like you\'re in "Stomp"',
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Jamie", "Mary"],
			scene:
				"Colin is James Bond and Ryan is a sexy Bond girl.  The two of them must fight their way through an evil lair hidden inside a volcano.",
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Affectionate walking talking teddy bear that turns mean when he hugs people",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Evil genius who absorbs other people's identities by kissing them",
				},
				{
					name: "Ryan Stiles",
					quirk: "A series of Brad's hideous dates",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about: "Lawyers",
		},
		{
			name: "Scenes from a Hat",
			alternateName: "Scenes From A Hat",
			scenes: [
				"Bad times to use a baby voice",
				"Unlikely cosmetics commercials",
				"Lines you wouldn't expect to hear in a love song",
			],
		},
	],
};
