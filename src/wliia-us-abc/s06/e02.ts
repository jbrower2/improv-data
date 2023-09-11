import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-02",
	airdate: "2004-07-01",
	productionNumber: "296734-424",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Wayne are two bickering French chefs who accidentally start a fire in the kitchen, Brad's the firefighter who arrives to rescue them",
			notes: [
				"Do it like you're masochists",
				"Do it like guys doing slow-motion stunts",
			],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Earl Fromipanema",
			},
			coAnchor: {
				name: "Brad Sherwood",
				alternateName: "Happy",
				quirk: "Owner doing a cheap and manic commercial for his wig store",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Jerry F'fee",
				quirk:
					"Leads a dual life: Sports reporter by day, raging drag queen performing in a club by night",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Captain Strike",
				quirk:
					"Tough drill instructor pushing out of shape raw recruits through a difficult assault course",
			},
		},
		{
			name: "Improbable Mission",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Wayne Brady",
			mission:
				"Walking the dog (The Prime Minister of All-Up-In-It-Vania is coming to town. He has a dog that weighs approximately fifty pounds. This dog needs to be walked at least two times a day or he will make a mess and it will cause an international incident.)",
		},
		{
			name: "Boogie Woogie Sisters",
			singers: ["Brad Sherwood", "Wayne Brady", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Superheroes",
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Brad Sherwood"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
