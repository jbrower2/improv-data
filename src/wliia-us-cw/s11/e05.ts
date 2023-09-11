import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-05",
	airdate: "2022-11-11",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Titus Sincethesurgery",
			},
			coAnchor: {
				name: "Jeff Davis",
				alternateName: "Pickle Galore",
				quirk: "The world's most annoying passenger on a car ride with Colin",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Going through an entire level in Tomb Raider",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Acting out the history of the movies",
			},
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit to help increase one's sex drive",
		},
		{
			name: "Doo-wop",
			alternateName: "Doo-Wop",
			singers: ["Jeff Davis", "Wayne Brady", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Betty, who died tragically in a vegetable accident",
		},
		{
			name: "Scenes from a Hat",
			alternateName: "Scenes From a Hat",
			scenes: [
				"Perfume scents that won't sell",
				"Things you'd never hear from a weatherman",
				"Terrible ways to lighten the mood",
				"What cows are thinking when being milked",
				"If Olympic sports were done in a sexy way",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Jeff Davis", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Jail_",
			songs: [
				{
					style: "Scandinavian Ska",
					title: "Early Release",
				},
				{
					style: "Italian",
					title: "Who Dropped The Soap?",
				},
			],
		},
	],
};
