import { type Episode } from "../../types/episode";

export const e18: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-18",
	airdate: "2001-02-21",
	productionNumber: "296722-327",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Skip Shapley",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Baldy Flapscalp",
				quirk: "Panics over the slightest thing",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Ricardo Balbón Montez de la Vasquez Asavolca",
				quirk: "Spanish TV's _Crocodile Hunter_",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Misty Showers",
				quirk: "Mercenary on a mission to replace everyone on the show",
			},
		},
		{
			name: "Award Show",
			presenters: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			winners: ["Colin Mochrie", "Ryan Stiles"],
			for: "Hillbillies",
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene:
				"Three track and field athletes talk in the locker room after a big meet",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Travelling Salesman_",
			songs: [
				{
					style: "Bluegrass",
					title: "Is Your Husband Home?",
				},
				{
					style: "Blues",
					title: "Brushes, Encyclopedias, and Vacuum Cleaners",
				},
				{
					style: "The Who",
					title: "Doorbell Wizard",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Brad Sherwood", "Wayne Brady"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
