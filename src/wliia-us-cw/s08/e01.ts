import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Amber Riley"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-01",
	airdate: "2020-03-30",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Amber Riley"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Jeff two scientists who are going to shrink themselves down and enter a human body, and then suddenly they're attacked by the body's defense mechanisms, played by Wayne",
			notes: ["Do it like Muppets", "Do it like a rock opera"],
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie"],
			phoneDonors: ["Kathy", "Darlene"],
			scene:
				"Colin is the high-strung owner of a nuclear power plant that's about to blow, and he's called in his senior nuclear scientists, Wayne and Jeff, to help solve the crisis",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady", "Amber Riley"],
			musicians: ["Laura Hall", "Linda Taylor"],
			styles: ["Motown duet"],
			about: "~~Amber~~ Love in shipping container homes",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Weird things to announce in a show-biz way",
				"If fairy tales had gritty, real-world endings",
				"Weird people to host _Whose Line Is It Anyway?_",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Amber Riley",
				{
					body: "Colin Mochrie",
					hands: "Ryan Stiles",
				},
			],
			scene:
				"Ryan is a stressed-out wedding planner taking the bride-to-be, Amber, through everything he's prepared for her for the big day",
		},
	],
};
