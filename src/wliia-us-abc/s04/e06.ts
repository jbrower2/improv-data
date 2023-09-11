import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-06",
	airdate: "2001-10-03",
	productionNumber: "296734-413",
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
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Pierre Cuzmybladdersempty",
			},
			coAnchor: {
				name: "Kathy Greenwood",
				alternateName: "Lubelle",
				quirk:
					"Trailer trash woman telling her ex-husband at home what a great lover her new boyfriend Colin is",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Winky",
				quirk:
					"Nerdy nearsighted teenager playing his first game of Spin the Bottle",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "John Wayne who thinks the studio is coming under attack",
			},
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Kathy Greenwood"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "People with freaky talents",
		},
		{
			name: "Party Quirks",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Various celebrities getting slowly steamrolled",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Suspects that people are not the sex they claim to be and is trying to find out for sure",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Hunky model in a photo shoot for the covers of romance novels",
				},
			],
		},
		{
			name: "Show-Stopping Number",
			performers: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Working at the post office",
		},
		{
			name: "World's Worst",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Person to share a lifeboat with"],
		},
	],
};
