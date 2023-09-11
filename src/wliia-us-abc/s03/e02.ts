import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-02",
	airdate: "2000-10-12",
	productionNumber: "296722-303",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Evil horror movie doll Chucky",
				},
				{
					name: "Colin Mochrie",
					quirk: "Cowardly old bystander in a western",
				},
				{
					name: "Ryan Stiles",
					quirk:
						'Relentless bounty hunter rounding up the infamous "Bald Men Gang"',
				},
			],
		},
		{
			name: "Scene with an Audience Member",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMember: "Giselle",
			scene:
				"Two surgeons competing for the attention of Giselle, their attractive nurse",
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Lynn", "Gail"],
			scene:
				"Two buddy cops relaxing in their squad car just before being called to an incident",
		},
		{
			name: "Motown Group",
			singers: ["Wayne Brady", "Chip Esten", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			song: "Do the Sewer Worker",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			to: "Chrissy from the audience",
			song: "You Are My Butterstick",
		},
	],
};
