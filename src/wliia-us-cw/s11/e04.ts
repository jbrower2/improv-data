import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-04",
	airdate: "2022-11-04",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			alternateName: "Lets Make A Date",
			host: "Gary Anthony Williams",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Demanding actor looking for co-stars for his sexy shower gel commercial",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Series of babies that people in the studio are giving birth to",
				},
				{
					name: "Ryan Stiles",
					quirk: "TSA sniffer dog looking for contraband",
				},
			],
		},
		{
			name: "Multiple Personalities",
			performers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			props: [
				{
					prop: "Gun",
					personality: "Yoda",
				},
				{
					prop: "Binoculars",
					personality: "Elvis",
				},
				{
					prop: "Canteen/Water Bottle",
					personality: "Captain Kirk",
				},
			],
			scene: "Out on a hunting expedition",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Apollo Loco",
			},
			coAnchor: {
				name: "Gary Anthony Williams",
				quirk:
					"Colin's overbearing mom who's trying to make him look presentable for his first day at school",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Performing an entire Taken movie",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Acting out the history of life on Earth in 30 seconds",
			},
		},
		{
			name: "Scenes from a Hat",
			alternateName: "Scenes From A Hat",
			scenes: [
				"Unlikely pet food commercials",
				"Things you can say in a bakery that you can't say about your partner",
				"Hillbilly versions of famous TV shows",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "Songs of the Cab Driver",
			songs: [
				{
					style: "Funk ft. Mr. T",
					title: "I Don't Think That's Pine Tree",
				},
				{
					style: "Calypso",
					title:
						"Wait, My Coat's Caught in the Do-- Hey!  Wait!  Hey!  Wait!  Wait!  Wait!",
				},
			],
		},
	],
};
