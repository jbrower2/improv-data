import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-08",
	airdate: "2018-07-16",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "One night in Vegas",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Jamila", "Cheryl"],
			scene:
				"Two high-tech French Secret Service agents preparing to land their helicopter and pursue a heavily-armed spy through Paris",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Walt Doesthefoxsay",
			},
			coAnchor: {
				name: "Keegan-Michael Key",
				quirk:
					"Bitchy beautician using Colin to demonstrate everything that can go wrong",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Wi' Him",
				quirk: "60 years of American television: the highlights",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Lucky Peru",
				quirk: "The rise and fall of a lottery winner",
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Strange things to hear from your waiter",
				"Pick up lines that won't work on Aisha",
				"If fairy-tale characters appeared on _Jerry Springer_",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Keegan-Michael Key",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a special forces survival expert teaching new recruit Keegan how to live off the land",
		},
	],
};
