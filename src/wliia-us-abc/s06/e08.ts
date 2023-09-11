import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-08",
	airdate: "2004-08-21",
	productionNumber: "296722-314",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan and Colin have disguised themselves as women in an all-female bank to hide from Wayne, a hitman working for the mob",
			styles: ["Western", "_Sesame Street_", "Shakespeare", "_Shaft_", "Opera"],
		},
		{
			name: "Title Sequence",
			singers: ["Wayne Brady", "Chip Esten"],
			actors: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			sitcom: "_The Travel Agent and Tom Jones_",
		},
		{
			name: "Action Replay",
			actors: ["Chip Esten", "Wayne Brady"],
			reEnacters: ["Ryan Stiles", "Colin Mochrie"],
			originalScene:
				"Wayne is furious with Chip for allowing their poisonous pet snake to escape",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Chip Esten"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Hitman_",
			songs: [
				{
					style: "Duran Duran",
					title: "Garrote, Garrote, Garrote",
				},
				{
					style: "Salsa",
					title: "The Sound of Silencers",
				},
				{
					style: "Blink-182",
					title: "Hitman Girl",
				},
				{
					style: "Rockabilly",
					title: "Poison in Your Wine",
				},
			],
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Drew Carey", "Ryan Stiles", "Colin Mochrie"],
			scene:
				"Drew and Colin are both sisters getting ready for the prom when Ryan shows up as a star quarterback, when they both realize that they've both been asked out by him",
			startingLetter: "J",
		},
	],
};
