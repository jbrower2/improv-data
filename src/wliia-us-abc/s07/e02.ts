import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-02",
	airdate: "2005-01-17",
	productionNumber: "296744-7002",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Uncle Ernie who's drinking too much and is about to ruin his niece Colin's wedding reception",
				},
				{
					name: "Colin Mochrie",
					quirk:
						'Heroic frog leading "the great escape" of all the frogs from a French restaurant',
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Has founded a cult that worships Colin and he lives his life by Colin's example",
				},
			],
		},
		{
			name: "Two-Line Vocabulary",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Colin is a tough SWAT team commander with his two agents, Ryan and Wayne, they must infiltrate the building, which terrorists have taken over",
			lines: [
				{
					name: "Wayne Brady",
					lines: ["Is this it?", "I want to go first."],
				},
				{
					name: "Ryan Stiles",
					lines: ["Should I be doing this?", "What's the point of that?"],
				},
			],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Kathy Greenwood"],
			scene: "A couple visit a themed restaurant",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Sharon", "Karen"],
			scene:
				"Clark Kent, who is Ryan, is having an intimate evening with Lois Lane, Colin, when he gets a message that supervillain Lex Luthor is terrorizing New York with a series of disasters",
		},
		{
			name: "Show-Stopping Number",
			performers: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Working at a bank",
			songs: [
				{
					name: "Colin Mochrie",
					song: "I'm in Charge of Counting Nickels",
				},
				{
					name: "Ryan Stiles",
					song: "This Is No Life for Me",
				},
				{
					name: "Wayne Brady",
					song: "Nacho Mama",
				},
			],
		},
		{
			name: "Themed Restaurant",
			diners: ["Kathy Greenwood", "Drew Carey"],
			waiters: ["Colin Mochrie", "Ryan Stiles"],
			theme: "Western",
		},
	],
};
