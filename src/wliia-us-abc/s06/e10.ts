import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-10",
	airdate: "2004-09-04",
	productionNumber: "296734-428",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "At the North Pole",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Magnet Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Mesmerized by Moving Objects Man",
				},
				{
					name: "Chip Esten",
					superpower: "The Bob Fosse Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "Chainsaw Massacre Boy",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "A sponge",
			styles: ["Busby Berkeley"],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Keith Mypastywhitebutt",
			},
			coAnchor: {
				name: "Chip Esten",
				quirk: "Snagglepuss",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Wicky",
				quirk:
					'Spots his next door neighbor peeping on him and decides to put on a "little show"',
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Norman Desmond",
				quirk:
					"Rise and fall of a female Hollywood legend of the silver screen",
			},
		},
		{
			name: "Newsflash",
			anchormen: ["Chip Esten", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "A montage of Ryan Stiles' _Whose Line?_ performances",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Giving birth](https://whoselineisitanyway.fandom.com/wiki/Giving_Birth_Irish_Drinking_Song)",
		},
		{
			name: "Themed Restaurant",
			diners: ["Wayne Brady", "Drew Carey"],
			waiters: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Two old friends who haven't seen each other in twenty years",
			theme: "Baseball",
		},
	],
};
