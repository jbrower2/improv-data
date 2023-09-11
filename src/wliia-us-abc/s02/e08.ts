import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Josie Lawrence"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-08",
	airdate: "1999-10-28",
	productionNumber: "296718-212",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Josie Lawrence", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Josie Lawrence",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Strict overbearing schoolmarm",
				},
				{
					name: "Colin Mochrie",
					quirk: "Uptight model on her first erotic photo shoot",
				},
				{
					name: "Ryan Stiles",
					quirk: "Frat boy showing off to his buddies in the audience",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Josie Lawrence"],
			scene:
				"Colin and his secretary, Josie, hardly able to keep their hands off each other, arrive at a motel, desperate for a room, Ryan is the sinister desk clerk",
			styles: ["Soap opera", "_Kung Fu_", "Evangelist show", "_Blair Witch_"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Josie Lawrence"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Snakes",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Frank Lee Dontgiveadamn",
			},
			coAnchor: {
				name: "Josie Lawrence",
				alternateName: "Minnie Pausal",
				quirk: "Characters from Shakespeare",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "On a treadmill that's going out of control",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Dwayne Thebathtub",
				quirk:
					"A baseball player who must hit a home run to win the World Series",
			},
		},
		{
			name: "Duet",
			singers: ["Josie Lawrence", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kenny, a machinist",
			styles: ["Punk rockers"],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Josie Lawrence", "Drew Carey"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Russian"],
			film: "_The Vodka Express_",
		},
	],
};
