import { type Episode } from "../../types/episode";

export const e24: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Candy Girard"
> = {
	number: 24,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-24",
	airdate: "2003-07-18",
	productionNumber: "296722-316",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Candy Girard"],
	games: [
		{
			name: "Superheroes",
			crisis: "Captain Morgan's boat sank",
			performers: [
				{
					name: "Brad Sherwood",
					superpower: "Captain Morgan",
				},
				{
					name: "Ryan Stiles",
					superpower: "Runs and Throws Like a Girl Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "The Copycat Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "Russian Gymnast Woman",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Margaret", "Bridey"],
			scene:
				"Batman and Robin get the call that one of their archenemies is wreaking havoc on Gotham City",
		},
		{
			name: "Title Sequence",
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			actors: ["Ryan Stiles", "Colin Mochrie"],
			sitcom: "_Napoleon and the Bartender_",
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene: "Three car mechanics at a service station",
		},
		{
			name: "Film Dub",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene: "A couple composes an ad jingle",
			film: "_Once Upon a Honeymoon_ (1956)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Inappropriate elementary school field trips",
				"Weird places to find advertising",
				"Little-known but amazing facts about Drew Carey",
				"Inappropriate emergency calls to make to 9-1-1",
				"Bad things to say after making love",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[The zoo](https://whoselineisitanyway.fandom.com/wiki/Zoo_Hoedown)",
		},
	],
};
