import { type Episode } from "../../types/episode.js";

export const e34: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 34,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-34",
	airdate: "2001-05-04",
	productionNumber: "296733-343",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Pro wrestler",
				},
				{
					name: "Colin Mochrie",
					quirk: "Turning into a frisky rabbit",
				},
				{
					name: "Ryan Stiles",
					quirk: "Neanderthal caveman defrosting",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Kathy Greenwood"],
			scene:
				"Police chief Colin arrives at the academy shooting range and discovers his wife, Kathy, getting very cozy with maverick shooting instructor Ryan",
			styles: [
				"_Three's Company_",
				"_Teletubbies_",
				"_Blair Witch_",
				"Western",
				"_Pokémon_",
			],
		},
		{
			name: "Motown Group",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			song: "Feed the Dog",
		},
		{
			name: "Party Quirks",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Great baseball fielding moments in slow motion",
				},
				{
					name: "Colin Mochrie",
					quirk: "Crazed hairdresser desperate to restyle everyone's hair",
				},
				{
					name: "Ryan Stiles",
					quirk: "A spider that slips into an emptying bathtub",
				},
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: "Laura and Linda",
			musical: "_Memorabilia_",
			song: "I Lost My Leg Warmers",
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Drew Carey", "Ryan Stiles", "Colin Mochrie"],
			scene:
				"On a camping trip when panicky Colin gets bitten by a rattlesnake",
			startingLetter: "J",
		},
	],
};
