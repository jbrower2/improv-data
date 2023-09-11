import { type Episode } from "../../types/episode";

export const e27: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 27,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-27",
	airdate: "2000-03-09",
	productionNumber: "296718-231",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Twice Nightly",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Trigger-happy hunter",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Snunk Ninkley",
				quirk: "Illustrates his report through dance",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Gets his jacket caught in a moving ski lift",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Amy and Christina, who run cross-country",
			styles: ["Backstreet Boys"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "The only employee in a busy drive-thru fast-food place",
		},
		{
			name: "Number of Words",
			scene:
				"Ryan is a World War II submarine captain, Colin is the nervous first mate, and they're joined by Wayne, a lieutenant, who's discovered a German stowaway, Greg",
			performers: [
				{
					name: "Ryan Stiles",
					words: 1,
				},
				{
					name: "Colin Mochrie",
					words: 3,
				},
				{
					name: "Wayne Brady",
					words: 2,
				},
				{
					name: "Greg Proops",
					words: 5,
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Experiencing violent fluctuations in gravity",
				},
				{
					name: "Colin Mochrie",
					quirk: "The history of warfare",
				},
				{
					name: "Ryan Stiles",
					quirk: "A vicious dog tied to a stake",
				},
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "A black hole",
		},
		{
			name: "Hoedown",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about:
				"[Bachelor party](https://whoselineisitanyway.fandom.com/wiki/Bachelor_Party_Hoedown)",
		},
	],
};
