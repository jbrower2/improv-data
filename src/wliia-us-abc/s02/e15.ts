import { type Episode } from "../../types/episode";

export const e15: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-15",
	airdate: "1999-12-02",
	productionNumber: "296718-207",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Denny Siegel",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Outraged grandmother",
				},
				{
					name: "Colin Mochrie",
					quirk: "Bad stand-up comic fed up with the audience",
				},
				{
					name: "Ryan Stiles",
					quirk: "Has taken a powerful aphrodisiac by accident",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "A blender",
			styles: ["The Temptations"],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "At an airport terminal",
		},
		{
			name: "Weird Newscasters",
			anchor: "Denny Siegel",
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Has been injected with dinosaur DNA",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Jerry Lewis",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Cornered criminal looking to take a hostage",
			},
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Brain surgery",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Movie ushers](https://whoselineisitanyway.fandom.com/wiki/Movie_Ushers_Hoedown)",
		},
	],
};
