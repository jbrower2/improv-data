import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-05",
	airdate: "2004-07-31",
	productionNumber: "296733-345",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "Clogged toilet",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Shedding Cat Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Strutting Pickup Artist Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Excitable Hamster Boy",
				},
				{
					name: "Wayne Brady",
					superpower: "Very Enthusiastic Game Show Contestant Boy",
				},
			],
		},
		{
			name: "Questionable Impressions",
			scene: "At a funeral home",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Wayne Brady"],
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Terry, second assistant manager in a clothing store",
			styles: ["Gospel"],
		},
		{
			name: "Moving People",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			moversFromTheAudience: ["Amy", "Shawna"],
			scene:
				"Colin is a doctor flown in by helicopter to rescue Ryan, who has been bitten by a venomous snake",
		},
		{
			name: "Hats",
			alternateName: "Dating Service Video",
			topic: "World's worst dating service video",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall", "Linda Taylor"],
			about:
				"[Pregnancy tests](https://whoselineisitanyway.fandom.com/wiki/Pregnancy_Test_Hoedown)",
		},
	],
};
