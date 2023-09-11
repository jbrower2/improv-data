import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Adelaide Kane"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-02",
	airdate: "2015-04-24",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Adelaide Kane"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "A busy night in a singles bar",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unappetizing soup flavors",
				"Things guaranteed to ruin the atmosphere at a dinner party",
				"If famous television shows were performed drunk",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Adelaide",
			styles: ["Latin pop"],
		},
		{
			name: "Party Quirks",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "All the characters in a _Paranormal Activity_ movie",
				},
				{
					name: "Colin Mochrie",
					quirk: "World's vainest man who thinks people's butts are mirrors",
				},
				{
					name: "Ryan Stiles",
					quirk: "A series of babies growing up into obnoxious adults",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Adelaide Kane",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Two girlfriends getting ready for a big night out",
		},
	],
};
