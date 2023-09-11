import { type Episode } from "../../types/episode.js";

export const e14: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-14",
	airdate: "1999-11-25",
	productionNumber: "296718-213",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "Tight underwear",
			performers: [
				{
					name: "Brad Sherwood",
					superpower: "Suicide Boy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Yodeling Pogo Stick Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Blood Loss",
				},
				{
					name: "Wayne Brady",
					superpower: "Cowboy Stunt Rider",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Ryan and Colin are two high-strung poodle owners competing against each other in a national dog show",
			styles: [
				"Cheech & Chong",
				"Richard Simmons",
				"Puppets",
				"_Romper Room_",
				"Sports replay",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Brad Sherwood", "Wayne Brady"],
			],
		},
		{
			name: "Motown Group",
			singers: ["Brad Sherwood", "Wayne Brady", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			song: "Do the Toothbrush",
		},
		{
			name: "The Millionaire Show",
			host: "Brad Sherwood",
			contestant: "Ryan Stiles",
			friendOnThePhone: "Colin Mochrie",
			audienceMember: "Wayne Brady",
			theme: "Ryan's sex life",
		},
		{
			name: "Hoedown",
			performers: [
				"Brad Sherwood",
				"Drew Carey",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Laura Hall"],
			about:
				"[Family reunions](https://whoselineisitanyway.fandom.com/wiki/Family_Reunion_Hoedown_(US_2-14))",
		},
	],
};
