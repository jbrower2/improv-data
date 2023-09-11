import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Jerry Springer"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-12",
	airdate: "2003-01-10",
	productionNumber: "296735-510",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Jerry Springer"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Greg and Ryan are the leaders of rival biker gangs facing off in a dramatic race towards a cliff's edge in a game of chicken; as they begin, Greg's girlfriend Wayne rides in, trying to stop them, whatever it takes",
			notes: [
				"Do it like gremlins",
				"Do it like you love the feel of carpet on your skin",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Greg Proops"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Clips from _The Jerry Springer Show_",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Jerry Springer",
			styles: ["Gospel"],
		},
		{
			name: "Daytime Talk Show",
			host: "Jerry Springer",
			guests: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Wayne Brady", "Greg Proops"],
			topic: "Little Red Riding Hood",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Ryan Stiles", "Jerry Springer"],
			musicians: "Laura and Linda",
			to: "Shannon from the audience",
			song: "I Dream About Your Yarmulke",
		},
	],
};
