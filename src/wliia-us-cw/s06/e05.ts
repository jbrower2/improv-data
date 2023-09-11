import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Chip Esten"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-05",
	airdate: "2018-06-25",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: [
		{
			name: "Chip Esten",
			alternateName: "Charles Esten",
		},
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a doctor's surgery",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady", "Jeff Davis", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Danielle, an admissions counselor",
			styles: ["Boy band"],
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Colin Mochrie", "Jeff Davis", "Wayne Brady"],
			phoneDonors: ["Renee", "Gabrielle"],
			scene:
				"Army captain Colin and his soldiers Jeff and Wayne are behind enemy lines, about to go on a dangerous mission",
		},
		{
			name: "World's Worst",
			performers: [
				"Colin Mochrie",
				"Ryan Stiles",
				"Chip Esten",
				"Jeff Davis",
				"Wayne Brady",
			],
			scenes: ["Deleted scene from a _Star Wars_ movie"],
		},
		{
			name: "Party Quirks",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Various violent movie scenes in slow motion",
				},
				{
					name: "Colin Mochrie",
					quirk: "A series of the world's angriest delivery men",
				},
				{
					name: "Ryan Stiles",
					quirk: "Different insects getting splattered on car windshields",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Chip Esten", "Ryan Stiles", "Jeff Davis"],
			musicians: ["Laura Hall"],
			about:
				"[Pilot](https://whoselineisitanyway.fandom.com/wiki/Pilot_Hoedown_(US_14-05))",
		},
	],
};
