import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-02",
	airdate: "1999-09-23",
	productionNumber: "296718-205",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Clyde Streudelpants",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Desmond Pettibone III",
				quirk: "1920s gangster under fire in a getaway car",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Hardwood Paneling",
				quirk: "In love with the camera operator",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Harry Showerdrain",
				quirk: "Trying to keep a leaking dam from bursting",
			},
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: 'Michelle, a "writer-slash-mom"',
			styles: ["Gipsy Kings"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Brad Sherwood"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Sharks",
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "On a tape that's being fast-forwarded and rewound",
				},
				{
					name: "Colin Mochrie",
					quirk: "Cruise ship steward in a bad storm",
				},
				{
					name: "Ryan Stiles",
					quirk: "Hyperactive lap dog looking for a lap",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Rejected theme songs from the movie _Titanic_",
				"Presidential slogans that will not get you elected",
				"Losing science fair projects",
				"Celebrity endorsements doomed to fail",
				"Drill sergeant pick up lines",
			],
		},
		{
			name: "Hoedown",
			performers: [
				"Brad Sherwood",
				"Drew Carey",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Laura Hall"],
			about:
				"[Drinking](https://whoselineisitanyway.fandom.com/wiki/Drinking_Hoedown)",
		},
	],
};
