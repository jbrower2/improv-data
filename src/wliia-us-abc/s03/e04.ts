import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-04",
	airdate: "2000-10-19",
	productionNumber: "296722-305",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Enormously Gifted",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Biff",
				quirk: "Frat boy cruising in a car with his buddies",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "In a Miss Fitness USA pageant",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Inca high priest who must sacrifice a virgin",
			},
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Marie", "Anne"],
			scene:
				"Two firemen who are sleeping in the station house when the alarm sounds",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "A coffee grinder",
			styles: ["A song", "dance number from the _Rocky Horror Picture Show_"],
		},
		{
			name: "Newsflash",
			anchormen: ["Greg Proops", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Women in swimsuits modelling and posing at the beach",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Voted for Ross Perot](https://whoselineisitanyway.fandom.com/wiki/Voted_for_Ross_Perot_Irish_Drinking_Song)",
		},
		{
			name: "World's Worst",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Things to say or do on a romantic date"],
		},
	],
};
