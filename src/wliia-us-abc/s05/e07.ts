import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-07",
	airdate: "2002-10-28",
	productionNumber: "296735-501",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Make a Monster",
			musicians: ["Laura Hall", "Linda Taylor"],
			drFrankenstein: "Colin Mochrie",
			igor: "Greg Proops",
			franksteinSMonster: {
				name: "Ryan Stiles",
				bodyParts: [
					{
						bodyPart: "Head",
						character: "John Wayne",
					},
					{
						bodyPart: "Right leg",
						character: "A soccer player",
					},
					{
						bodyPart: "Left leg",
						character: "A Radio City Rockette",
					},
					{
						bodyPart: "Arms",
						character: "The robot from _Lost in Space_",
					},
				],
			},
			brideOfFrankenstein: {
				name: "Wayne Brady",
				bodyParts: [
					{
						bodyPart: "Head",
						character: "Sammy Davis Jr.",
					},
					{
						bodyPart: "Legs",
						character: "Big chicken legs",
					},
					{
						bodyPart: "Left arm",
						character: "Muhammad Ali",
					},
					{
						bodyPart: "Right arm",
						character: "A woman",
					},
				],
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you don't want to hear in the dark",
				"What slasher movie villains are really thinking while they're waiting to pop out",
			],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Curtis Interruptus",
			},
			coAnchor: {
				name: "Greg Proops",
				alternateName: "Randy Always",
				quirk:
					"Politician filming a smear campaign ad against his opponent Drew",
			},
			sports: {
				name: "Wayne Brady",
				quirk:
					"Frat boy doing a serious of outrageous dares to impress his drinking buddies in the front row",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Rocky Dooley",
				quirk: "The rise and fall of a 1940s boxer",
			},
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Drew goes to see old witch Ryan to have his fortune told and buy some magic potions",
		},
	],
};
