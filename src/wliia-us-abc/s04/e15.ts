import { type Episode } from "../../types/episode.js";

export const e15: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Lassie"
	| "Sid Caesar"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-15",
	airdate: "2001-11-21",
	productionNumber: "296735-503",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Lassie", "Sid Caesar"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questionable Impressions",
			alternateName: "Questionable Impressions from Television",
			scene: "Emergency room",
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Lassie",
			styles: ["A country song"],
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Colin Mochrie",
				"Brad Sherwood",
				"Wayne Brady",
			],
			scene: "Two street gangs arguing over territories",
			film: "_World Without End_ (1956)",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Julie", "Karen"],
			scene:
				"Ryan is one of Charlie's Angels and Colin is Bosley, and they've received instructions from Charlie to infiltrate a criminal mastermind's jungle headquarters, where his militia has kidnapped the other two Angels",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Drew Carey", "Sid Caesar"],
			translators: ["Ryan Stiles", "Colin Mochrie"],
			film: "_Escargot_",
			languages: ["French", "German", "Japanese", "Russian"],
		},
	],
};
